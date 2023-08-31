import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { ArrayComponent } from './array/array.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SellerComponent } from './seller/seller.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { DetailsComponent } from './details/details.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TreeTableModule } from 'primeng/treetable';
import { ServicesComponent } from './services/services.component';
import { PaginatorModule } from 'primeng/paginator';
import { ChipModule } from 'primeng/chip';
import { TrackComponent } from './track/track.component';
import { EditorModule } from 'primeng/editor';
import { SellerUpdateComponent } from './seller-update/seller-update.component';
import { RatingModule } from 'primeng/rating';
import { ProductComponent } from './product/product.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { WorksComponent } from './works/works.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    RegisterComponent,
    LoginComponent,
    ListRestoComponent,
    UpdateRestoComponent,
    ArrayComponent,
    HomeComponent,
    SellerComponent,
    SellerListComponent,
    DetailsComponent,
    SellerLoginComponent,
    FooterComponent,
    MainComponent,
    UserLoginComponent,

    ServicesComponent,
     TrackComponent,
     SellerUpdateComponent,
     ProductComponent,
     ProductCollectionComponent,
     WorksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    TagModule,
    ButtonModule,DynamicDialogModule,DialogModule,
    TableModule,TreeTableModule,PaginatorModule,ChipModule,EditorModule,RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
