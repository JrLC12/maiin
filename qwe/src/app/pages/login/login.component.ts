import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth : AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    
    localStorage.clear();
    document.getElementById("logout").style.display = "none";
  }

  login() {
    this.http.get<any>("http://localhost:3000/SignupUsers")
      .subscribe(res => {
        const user = res.find((a: any) => {
            return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        
        });
      
        if (user) {
          
          localStorage.setItem("email", this.loginForm.value["email"]);
          localStorage.setItem("password", this.loginForm.value["password"]);
          var Fullname = user.first_name.toUpperCase() + " " + user.last_name.toUpperCase();
          localStorage.name = Fullname;
          if(localStorage.getItem("email") === null && localStorage.getItem("password") === null){
            document.getElementById("logout").style.display = "none";
          }else{
            if(localStorage.getItem("email") === user.email && localStorage.getItem("password") === user.password){
              document.getElementById("logout").style.display = "block";
            }else{
              document.getElementById("logout").style.display = "none";
            }
        
          }
          //alert("Successfully Login");
         Swal.fire('Login Successfully','Hi' + ' ' + user.first_name.toUpperCase() + ' ' + user.last_name.toUpperCase(),'success');
          this.loginForm.reset();
          this.router.navigate(['/home']);
          
        } else {
          //alert("User not found");
         Swal.fire('Doesn\'t exist','User not found','error');
        }
     
      }, err => {
        //alert("Something went wrong");
         Swal.fire('Server failed','Something went wrong','error');
      })
      
  }

}
