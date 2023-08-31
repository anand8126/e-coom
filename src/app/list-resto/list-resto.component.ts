import { Component } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent {
  alert:boolean=false;

  constructor(private resto:RestoService){}

collection:any={};

  ngOnInit(): void {
    
    this.resto.getList().subscribe((ans)=>{
      console.log(ans);
      this.collection=ans;
    });
  }

  deleteResto(item:any){

    this.collection.splice(item -1,1); 
    this.resto.deleteResto(item).subscribe((ans)=>{
      console.log("Delete Data ",ans);
      this.alert=true;
     
    })
  }

  closeAlert(){
    this.alert=false;
  }
}
