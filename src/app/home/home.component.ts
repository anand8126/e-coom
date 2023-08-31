import { Component } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    details: any | undefined;
    product:any;
    constructor(private service:SellerService,private active: ActivatedRoute) {}

    ngOnInit() {



       this.getData();
    }

    getData(){
        this.service.GetSellerData().subscribe((ans)=>{
            this.product=ans;
            console.log("get API is working ",ans);
        })
    }
    getSeverity(status: string) {
        
    }
    responsiveOptions = [
        
    ];
    
}

