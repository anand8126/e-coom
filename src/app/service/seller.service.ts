import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  sellerUrl='http://localhost:3000/api/v1/seller/';

  constructor(private http:HttpClient) { }


  GetSellerData(){
    return this.http.get(this.sellerUrl);
  }

  PostSellerData(Data:any){
    return this.http.post(this.sellerUrl,Data);
  }

  GetIdData(id:any){
    // console.log("get ",id);
    return this.http.get<any>(`http://localhost:3000/api/v1/seller/${id}`);
  }

  DeleteData(id:any){
    return this.http.delete(`http://localhost:3000/api/v1/seller/${id}`);
  }

  postrating(data:any){
    return this.http.post("http://localhost:3000/api/v1/rating/",data);
  }

  getRate(){
    return this.http.get("http://localhost:3000/api/v1/rating/");
  }
}
