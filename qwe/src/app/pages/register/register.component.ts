import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      contact: ['', Validators.required]
    })
    localStorage.clear();
    document.getElementById("logout").style.display = "none";
  }
  register() {

    if (this.signupForm.value['password'] === this.signupForm.value['confirm_password']) {
      this.http.post<any>("http://localhost:3000/SignupUsers", this.signupForm.value)
        .subscribe(res => {
      
            Swal.fire('Registered successfully', 'Goodjob', 'success')
            this.signupForm.reset();
            this.router.navigate(['login'])
        
        }, err => {

          Swal.fire('Server failed', 'Something went wrong', 'error');
        })
    } else {
      Swal.fire('Password not match', '', 'error');
    }
  }

}
