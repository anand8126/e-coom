import { Component } from '@angular/core';


import { SellerService } from '../service/seller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  products:any;
  details:any

  constructor(private service:SellerService,private active: ActivatedRoute)
{
}

ngOnInit(): void {
 
  this.getDta()

}

getId(){
  const id = this.active.snapshot.params['id'];
  console.log('Detail ID:', id);

  this.service.GetIdData(id).subscribe((ans)=>{
    this.details=ans;
  })
}

getDta(){
  this.service.GetSellerData().subscribe((ans)=>{
    this.products=ans;
    console.log(ans);
  })
}

PageChange(event: any) {
  this.start = event.first; // Update the start index based on the page
  this.rows = event.rows; 
  // console.log(event); 
}

start: number = 0;
rows: number = 5;
totalRecords: number = 50;





}
