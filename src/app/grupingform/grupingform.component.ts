import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grupingform',
  templateUrl: './grupingform.component.html',
  styleUrls: ['./grupingform.component.css']
})
export class GrupingformComponent implements OnInit {

  contactform= new FormGroup ({ 
    username: new FormControl(),
    password: new FormControl (),
  address: new FormControl(),
    street: new FormControl(),
    pinNumber: new FormControl(),
    plotnumber: new FormControl()
 })
 collectdata(){
   console.log(this.contactform.value);
   alert(this.contactform.value)
   
 }
  constructor() { }
  ngOnInit(): void {
  }

}
