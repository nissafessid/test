import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiproductService } from '../services/apiproduct.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:ApiproductService) { }

  ngOnInit() {
      this.productForm = this.formBuilder.group({
          name: ['', Validators.required],
          prix: ['', Validators.required],
          description: ['', Validators.required]
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.productForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.productForm.invalid) {


        console.log(this.productForm.value)
          return;
      }

      // display form values on success

      this.apidata.addproduct(this.productForm.value).subscribe(res=>{
        Swal.fire(
          'added!',
          'Your product has been added.',
          'success'
        )
        this.route.navigateByUrl('/home/product')
       })
     
  }

  onReset() {
      this.submitted = false;
      this.productForm.reset();
  }

}
