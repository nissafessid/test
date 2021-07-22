import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentifictionService } from 'src/app/services/authentifiction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:AuthentifictionService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
     
     
  });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
       
    }

    // display form values on success

    this.apidata.login(this.loginForm.value).subscribe((res:any)=>{
      console.log(res)
    
      if(res.status==='success'){
        Swal.fire({
          icon:'success',
          title:'user found',
          text:'email valid ',
          footer:'password valid'
        })
       this.route.navigateByUrl('/home')
       localStorage.setItem('userconnect',JSON.stringify(res['data'].user))
       localStorage.setItem('token',res['data'].token)
       localStorage.setItem('refreshtoken',res['data'].refreshtoken)
       localStorage.setItem("state","0")

      }
      else{
        Swal.fire({
          icon:'error',
          title:'user not found ',
          text:'email invalid',
          footer:'password invalid'
        })
      }
     })
   


}}
