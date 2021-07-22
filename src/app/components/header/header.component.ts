import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentifictionService } from 'src/app/services/authentifiction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoutForm: FormGroup;

  constructor(private apidata:AuthentifictionService,private route: Router) { }

  ngOnInit(): void {}

 logout() {
    this.apidata.logout().subscribe((res:any)=>{
      console.log(res)
      this.route.navigateByUrl('/')
      localStorage.clear()

})

 }



}
