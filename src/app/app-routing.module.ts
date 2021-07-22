import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { AddorderComponent } from './components/addorder/addorder.component';
import { DetailcategoryComponent } from './components/detailcategory/detailcategory.component';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { DetailuserComponent } from './components/detailuser/detailuser.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListcategoryComponent } from './components/listcategory/listcategory.component';
import { ListprodComponent } from './components/listprod/listprod.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistreComponent } from './components/registre/registre.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegistreComponent},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent, children:[
    {path:'',component:LayoutComponent},
    {path:'product',component:ListprodComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'detailproduct/:id',component:DetailproductComponent},
    {path:'category',component:ListcategoryComponent},
    {path:'detailcategory/:id',component: DetailcategoryComponent},
    {path:'addcategory',component:AddcategoryComponent},
    {path:'user',component:ListuserComponent},
    {path:'detailuser/:id',component: DetailuserComponent},
    {path:'profile',component:ProfileComponent},
    {path:'order',component:OrderComponent},
    {path:'addorder',component:AddorderComponent}












  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
