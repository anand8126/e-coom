import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-seller-update',
  templateUrl: './seller-update.component.html',
  styleUrls: ['./seller-update.component.css']
})
export class SellerUpdateComponent {
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

