import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiorderService {

  constructor(private http:HttpClient) { }

  getorders(){
    return this.http.get(`${environment.baseurl}/order/all`)
  }
  getorderById(id:any){
    return this.http.get(`${environment.baseurl}/order/getone/${id}`)
  }
  addorder(order:any){
    return this.http.post(`${environment.baseurl}/order/save`,order )}

 deleteorder(id:any){
      return this.http.delete(`${environment.baseurl}/order/delete/${id}`)}

updateorder(id:any,neworder:any){
  return this.http.put(`${environment.baseurl}/order/update/${id}`,neworder)
}
}
