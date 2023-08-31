import { Component } from '@angular/core';
import { FormArray,FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {


  SellProduct:any=FormGroup ;

  postData:string='';
  constructor(private fb:FormBuilder, private service:SellerService){}

  ngOnInit(): void {

    this.SellProduct=this.fb.group({
      productName:[''],
      image:[''],
      price:[''],
      category:[''],
      description:[''],
    });
    
  };

  
  postProduct(){

    this.service.PostSellerData(this.SellProduct.value).
    subscribe((ans)=>{
      if(ans){
        console.log("Data Send is backend !! ");
        this.postData="Product Post Successfully !";
      }
      this.SellProduct.reset();
     
    })
  }

}
