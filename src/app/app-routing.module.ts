import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { DetailcategoryComponent } from './components/detailcategory/detailcategory.component';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListcategoryComponent } from './components/listcategory/listcategory.component';
import { ListprodComponent } from './components/listprod/listprod.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegistreComponent},
  {path:'home',component:HomeComponent, children:[
    {path:'',component:LayoutComponent},
    {path:'product',component:ListprodComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'detailproduct',component:DetailproductComponent},
    {path:'category',component:ListcategoryComponent},
    {path:'detailcategory',component: DetailcategoryComponent},
    {path:'addcategory',component:AddcategoryComponent}




  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
