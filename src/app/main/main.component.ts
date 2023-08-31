import { Component } from '@angular/core';
import { SellerloginService } from '../service/sellerlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  menuType: string = 'default';
  sellerName: string = '';

  constructor(private service: SellerloginService,
    private route: Router
  ) {

  }

  ngOnInit(): void {

    this.route.events.subscribe((ans: any) => {
      if (ans.url) {
        if (localStorage.getItem('seller') && ans.url.includes('seller')) {
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore);
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
          console.log("This is login Area!", this.sellerName);
        } else {
          console.log("Outside login Area!");
          this.menuType = 'default';
        }
      }

    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
}

// To print sellerName in the console, you can use the following:

// console.log("Seller Name:", this.sellerName);
