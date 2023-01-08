import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
 url ="https://formsubmit.co/41a37320fbb6249874beaa00aa2d8cca";
  constructor() { }

  ngOnInit() {
    var getEms = localStorage.email;
    var getname = localStorage.name;
    var inputValue = (<HTMLInputElement>document.getElementById("cont_ems")).value = getEms;
    var inputValue = (<HTMLInputElement>document.getElementById("cont_name")).value = getname;
    
  }
}
