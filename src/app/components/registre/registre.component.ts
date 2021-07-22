import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentifictionService } from 'src/app/services/authentifiction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  RegisterForm: FormGroup;
  submitted = false;
  fileToUpload:Array<File>=[];
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:AuthentifictionService) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      role: ['', Validators.required]

     
     
  });
  }

  handleFileInput(files: any){
    this.fileToUpload=<Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.RegisterForm.invalid) {
      console.log("err de validation",this.RegisterForm.value)
        return;
       
    }

    let formdata=new FormData();
    formdata.append("email",this.RegisterForm.value.email);
    formdata.append("password",this.RegisterForm.value.password);
    formdata.append("name",this.RegisterForm.value.name);
    formdata.append("phone",this.RegisterForm.value.phone);
    formdata.append("role",this.RegisterForm.value.role);
    formdata.append("file",this.fileToUpload[0]);






    // display form values on success

    this.apidata.register(formdata).subscribe(res=>{
      console.log(res)
      Swal.fire(
        'user added !',
        'success'
      )
      this.route.navigateByUrl('/home/user')
     })
    }
}
