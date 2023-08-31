import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SellerloginService } from '../service/sellerlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
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
    this.route.navigate(['/service']);
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
