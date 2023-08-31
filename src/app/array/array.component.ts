import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
})
export class ArrayComponent {
  arrayData: FormGroup; // Corrected the declaration and type
  constructor(private fb: FormBuilder, private service: RestoService) {
    this.arrayData = this.fb.group({
      name: '',
      details: this.fb.array([]),
    });
  }

  get details(): FormArray {
    return this.arrayData.get('details') as FormArray;
  }

  newdetails(): FormGroup {
    return this.fb.group({
      address: '',
      pin: '',
    });
  }

  addDetails() {
    this.details.push(this.newdetails());
  }

  removeDetails(i: number) {
    this.details.removeAt(i);
  }

  onSubmit() {
    this.service.arrayPost(this.arrayData.value).subscribe((ans) => {
      alert('Array Data Successfully send your array dataBase');
    });
    // console.log(this.arrayData.value);
    // alert("Submit your Data Successfully!")
    // this.arrayData.reset();
  }
}
