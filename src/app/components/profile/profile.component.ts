import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentifictionService } from 'src/app/services/authentifiction.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor(private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit(): void {

   console.log(this.userconnect)
  }

 
}
