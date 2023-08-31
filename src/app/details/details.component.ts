import { Component, OnInit } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  value!: number;
  details: any | undefined;
  product:any;
  h3:any;

  message:string='';

  items:any

  ratingform:any=FormGroup;
  constructor(private service: SellerService, private fb:FormBuilder, private active: ActivatedRoute) {}

  

  ngOnInit(): void {

    this.getRating();
    this.ratingform=this.fb.group({
      name:[''],
      comment:[''],
      rate:[''],
    })

    this.h3='Frequently Bought Together';
    this.getData();
    // debugger
    this.getId();
 
   
  }
getId(){
  const id = this.active.snapshot.params['id'];
  console.log('Detail ID:', id);

  this.service.GetIdData(id).subscribe((ans)=>{
    this.details=ans;
  })
}
  getData(){
    this.service.GetSellerData().subscribe((ans)=>{
        this.product=ans;
        console.log("get API is working ",ans);
    })
}

submitRating(){
  this.service.postrating(this.ratingform.value).subscribe((ans)=>{
    console.log(ans);
    this.message="Review post Successfully!";
    this.getRating();
    this.ratingform.reset();
  })

  setTimeout(()=>{
    this.message='';
  },10000)
  
}
getRating(){
  this.service.getRate().subscribe((ans)=>{
    // console.log("The rating is ",ans);
    this.items=ans;
  })
}
}
