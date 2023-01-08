import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '_themes/minty-bootstrap.min.css']
})
export class AppComponent implements OnInit {
  

  constructor(public router : Router){}

  ngOnInit(): void {
   
    
  }
  logout(){
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        //this.router.navigate(['login']);
       location.replace("/login");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
       // Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
   
  }
  gotosummarizer(){
    if(localStorage.getItem("email") == null && localStorage.getItem("password") == null){
      location.replace("http://127.0.0.1:5000/");
    }else{
      Swal.fire({
        title: 'You are about to logout',
        text: 'do you still wish to continue?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Go to summarizer',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.value) {
          localStorage.clear();
          //this.router.navigate(['login']);
         location.replace("http://127.0.0.1:5000/");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
         // Swal.fire('Cancelled', 'Product still in our database.)', 'error');
        }
      });
    }
  }
}
