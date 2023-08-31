import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerloginService {

  isellerLogin=new BehaviorSubject<boolean>(false);
  islogin=new EventEmitter<boolean>(false);

  urls='http://localhost:3000/api/v1/login';
  loginUrl='http://localhost:3000/api/v1/login/login';
  logoutUrl='http://localhost:3000/api/v1/seller-users/logout';
  constructor(private http:HttpClient,private router: Router,) { }

  PostSignUp(data:any){
    this.http.post(this.urls,data, {observe:"response"}).subscribe((ans)=>{
      console.log(ans);
        
    })
  }


  getdata(){
    return this.http.get(this.urls);
  }
  
  PostLogin(id:any){
    this.http.post(this.loginUrl, id, {observe:'response'}).subscribe((ans) =>{

      console.log(ans);
      if(ans){
        this.islogin.emit(false);
        this.isellerLogin.next(true);
        localStorage.setItem('seller',JSON.stringify(ans.body));
        this.router.navigate(['/seller']);
      }
      else{
        console.log("Login Failed");
        this.islogin.emit(true);
      }

    } )
  }

  reloadSeller(){
   if(localStorage.getItem('seller ')) {
    this.isellerLogin.next(true);
    this.router.navigate(['/seller']);
   }

  }
  PostLogout(data:any){
    return this.http.post(this.logoutUrl, data);
  }
}
