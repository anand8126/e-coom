import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  urls='http://localhost:5000/api/v1/list/';

  url="http://localhost:5000/api/v1/";

  arrayUrl='http://localhost:3000/api/v1/array/';

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.urls);
  }

  saveResto(data:any){
    // console.log("service is working ",data);
    return this.http.post(this.urls, data);
  }

  deleteResto(id:any){
    return this.http.delete(`${this.urls}/${id}`);
  }

  getCurrentResto(id:any){
    return this.http.put(`${this.urls}/${id}`,id);
  }
  updateResto(id:any, data:any){
    return this.http.put(`${this.urls}/${id}`,data);
  }

// for register service to send post data on backend

  saveRegister(data:any){
    console.log("post register ",data);
    return this.http.post(this.url+"register", data);
  }

  arrayPost(data:any){
    return this.http.post(this.arrayUrl, data);
  }

}
