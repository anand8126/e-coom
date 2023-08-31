import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  alert:boolean=false;
  register=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })
  constructor(private resto:RestoService){}
  ngOnInit(): void {

  }

  collection(): void {


    this.resto.saveRegister(this.register.value).subscribe((ans)=>{
      console.log('ans',ans);
      this.alert=true;
      this.register.reset({});
    })
 
   
  }

  closeAlert(){
    this.alert=false;
  }

}
