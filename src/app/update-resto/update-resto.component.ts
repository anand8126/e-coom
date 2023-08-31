import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent {

  alert:boolean=false;

  editResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
  })
  constructor(private resto:RestoService, private router:ActivatedRoute){}


  ngOnInit(): void {

    console.log(this.router.snapshot.params['id']);
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((ans:any)=>{
    console.log('ans ',ans);

      this.editResto=new FormGroup({
        name:new FormControl(ans.name),
        email:new FormControl(ans.email),
        address:new FormControl(ans.address),
      })
    })
    
  }


  collection()
{
  // console.log("update data ",this.editResto.value);
  this.resto.updateResto(this.router.snapshot.params['id'],this.editResto.value)
  .subscribe((ans)=>{
    console.log("update Data is ",ans);
    this.alert=true;
  })
}
closeAlert(){
  this.alert=false;
}
}
