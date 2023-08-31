import { Component } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent {

  product:any;

  constructor(private service:SellerService,private active:ActivatedRoute){}

  ngOnInit(): void {
    this.GetSeller();

    let id = this.active.snapshot.params['id'];
    console.log('Delete ID:', id);
  }


  deleteList(id:any){
    // console.log("id ",id);
    this.service.DeleteData(id).subscribe((ans)=>{
      this.GetSeller();
    })

  }

  GetSeller(){
    this.service.GetSellerData().
    subscribe((ans)=>{
      console.log("Get Data in Backend!",ans);
      this.product=ans;
    })
  }


}
