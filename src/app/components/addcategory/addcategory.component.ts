import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicategoryService } from 'src/app/services/apicategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  categoryForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:ApicategoryService) { }

  ngOnInit() {
      this.categoryForm = this.formBuilder.group({
          title: ['', Validators.required],
          description: ['', Validators.required],
         
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.categoryForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.categoryForm.invalid) {
          return;
      }

      // display form values on success

      this.apidata.addcategory(this.categoryForm.value).subscribe(res=>{
        Swal.fire(
          'added!',
          'Your product has been added.',
          'success'
        )
        this.route.navigateByUrl('/home/category')
       })
     
  }

  onReset() {
      this.submitted = false;
      this.categoryForm.reset();
  }

}
