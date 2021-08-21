import { Component } from '@angular/core';
import {FormGroup,FormControl,} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectf3';
  akaiform= new FormGroup ({
    yourname: new FormControl,
    phone: new FormControl,
    Email: new FormControl,
    Subject: new FormControl,
    Yourmessage: new FormControl  
     })
     
     siteUrl=window.location.href
   
     sendmessage ()
     {
   console.log (this.akaiform.value)
     }
}
