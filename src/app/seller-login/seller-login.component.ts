import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SellerloginService } from '../service/sellerlogin.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {

  sellerLogin:any=FormGroup;
  sellerSignup:any=FormGroup;


  authError:string='';

  slowLogin:boolean=false;
  constructor(private fb:FormBuilder, 
    private service:SellerloginService,
    private route:Router
    ){}


  ngOnInit(): void {

    this.service.reloadSeller();
  
    this.sellerLogin=this.fb.group({
      email:[''],
      password:[''],
    });


    this.sellerSignup=this.fb.group({
      name:[''],
      mobile:[''],
      email:[''],
      password:[''],
    })

  }
  


  sellerLoginSubmit(){
    // console.log(this.sellerLogin.value);
   
    this.service.PostLogin(this.sellerLogin.value)
    this.service.islogin.subscribe((ans)=>{
      // console.log(ans);
      if(ans){
        this.authError="Email or Password is not correct!!"
      }
      
    })
    // .subscribe((ans)=>{
      
    //   if(ans){
    //     console.log("The login data API ",ans);
    //     this.route.navigate(['/seller-list']);
    //   }
    //   else{
    //     console.log("invliad");
        
    //   }
    // })
  }


  sellerSignupSubmit(){
    // console.log(this.sellerSignup.value);
    this.service.PostSignUp(this.sellerSignup.value)
    // .subscribe((ans)=>{
    //   console.log("sign up api call ",ans);
      this.sellerSignup.reset();
    // })
   
  }
  openLogin(){
    this.slowLogin=true;
  }

  openSignup(){
    this.slowLogin=false;
  }
  

}
