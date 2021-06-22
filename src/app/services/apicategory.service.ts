import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApicategoryService {

  constructor(private http:HttpClient) { }

  getcategorys(){
    return this.http.get(`${environment.baseurl}/category/all`)
  }
  getcategoryById(id:any){
    return this.http.get(`${environment.baseurl}/category/getone/${id}`)
  }
  addcategory(category:any){
    return this.http.post(`${environment.baseurl}/category/save`,category )}

 deletecategoryt(id:any){
      return this.http.delete(`${environment.baseurl}/category/delete/${id}`)}

updatecategory(id:any,newcategory:any){
  return this.http.put(`${environment.baseurl}/category/update/${id}`,newcategory)
}
}
