import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  

})

export class LoginComponent {

  //we have declear formGroup 
  arrayForm!: FormGroup;

  constructor(){}

  // this ngOnInit();

  ngOnInit(): void {
    this.arrayForm = new FormGroup({
      group: new FormArray([])
    });
  }

  // we have declear addgorupFunction which is store for data name in array format
  addGroup() {

    const newGroup = new FormGroup({
      groupName: new FormControl(''),
      userDetails: new FormArray([this.createUserDetails()])
    });
    (this.arrayForm.get('group') as FormArray).push(newGroup);
  }

  createUserDetails(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      mobile:new FormControl(''),
      email:new FormControl(''),
    });
  }

  add() {
    const groupArray = this.arrayForm.get('group') as FormArray;
    const lastGroup = groupArray.at(groupArray.length - 1) as FormGroup;
    const userDetailsArray = lastGroup.get('userDetails') as FormArray;
    userDetailsArray.push(this.createUserDetails());
  }

  data() {
    console.log(this.arrayForm.value);
  }

  get groupControls() {
    return (this.arrayForm.get('group') as FormArray).controls;
  }

  get userDetailsControls() {
    const groupArray = this.arrayForm.get('group') as FormArray;
    const lastGroup = groupArray.at(groupArray.length - 1) as FormGroup;
    return (lastGroup.get('userDetails') as FormArray).controls;
  }
}
