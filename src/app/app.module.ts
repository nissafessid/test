import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListprodComponent } from './components/listprod/listprod.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { ListcategoryComponent } from './components/listcategory/listcategory.component';
import { DetailcategoryComponent } from './components/detailcategory/detailcategory.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { DetailuserComponent } from './components/detailuser/detailuser.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/order/order.component';
import { AddorderComponent } from './components/addorder/addorder.component';
import { RecherchePipe } from './pipes/recherche.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Recherche1Pipe } from './pipes/recherche1.pipe';
import { ProductquantityDirective } from './productquantity.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    RegistreComponent,
    LayoutComponent,
    ListprodComponent,
    FooterComponent,
    AddproductComponent,
   DetailproductComponent,
   ListcategoryComponent,
   DetailcategoryComponent,
   AddcategoryComponent,
   AdduserComponent,
   ListuserComponent,
   DetailuserComponent,
   ProfileComponent,
   OrderComponent,
   AddorderComponent,
   RecherchePipe,
   Recherche1Pipe,
   ProductquantityDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
