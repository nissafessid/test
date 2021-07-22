import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentifictionService {
  token = localStorage.getItem("token")!
  headersoption = new HttpHeaders({
    "x-access-token": this.token
  })


  constructor(private http: HttpClient) { }
  register(newuser: any) {
    return this.http.post(`${environment.baseurl}/users/save`, newuser)
  }
  login(requestLogin: any) {
    return this.http.post(`${environment.baseurl}/users/auth`, requestLogin)
  }


  getusers() {
    return this.http.get(`${environment.baseurl}/users/all`)
  }
  getuserById(id: any) {
    return this.http.get(`${environment.baseurl}/users/getone/${id}`)
  }


  deleteuser(id: any) {
    return this.http.delete(`${environment.baseurl}/users/delete/${id}`)
  }

  updateuser(id: any, newuser: any) {
    return this.http.put(`${environment.baseurl}/users/update/${id}`, newuser)
  }
  logout() {
    let refreshtoken = localStorage.getItem("refreshtoken")
    return this.http.post(`${environment.baseurl}/users/logout`, { "refreshToken": refreshtoken },
      { headers: this.headersoption }
    )
  }




}
