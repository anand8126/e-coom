import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators,FormArray, FormBuilder} from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent {

  alert:boolean=false;
  addResto:any;
 
  constructor(private resto:RestoService, fb:FormBuilder){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.addResto=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      address:new FormControl('',[Validators.required]),
      
      course:new FormArray([
        new FormControl(null),
      ])
    })
    
  }

  collectresto(): void {

    console.log(this.addResto.value);
    this.addResto.reset();
    
    // this.resto.saveResto(this.addResto.value).subscribe((ans: any) => {
    //   console.log('ans', ans);
    //   this.alert=true;
    //   this.addResto.reset({});
    // });
   
  }

  get namedata(){
    return this.addResto.get('name');
  }

  get emailData(){
    return this.addResto.get('email');
  }


  get addressdata(){
    return this.addResto.get('address');
  }
  closeAlert(){
    this.alert=false;
  }

  // addArray(){
  //   const   myarray=this.addResto.get('course') as FormArray;
  //   myarray.push(new FormControl(''));
  // }

  addCourse(){
    this.addResto.get('course').push(new FormControl(""));  
   }

}
