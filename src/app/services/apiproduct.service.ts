import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiproductService {

  constructor(private http:HttpClient) { }

  getproducts(){
    return this.http.get(`${environment.baseurl}/product/all`)
  }
  getproductById(id:any){
    return this.http.get(`${environment.baseurl}/product/getone/${id}`)
  }
  addproduct(product:any){
    return this.http.post(`${environment.baseurl}/product/save`,product )}

 deleteproduct(id:any){
      return this.http.delete(`${environment.baseurl}/product/delete/${id}`)}

updateproduct(id:any,newproduct:any){
  return this.http.put(`${environment.baseurl}/product/update/${id}`,newproduct)
}

}
