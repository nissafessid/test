import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApicategoryService } from '../services/apicategory.service';
import { ApiproductService } from '../services/apiproduct.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  listcategorys:any
  listproviders:any
  productForm: FormGroup;
  submitted = false;
  fileToUpload:Array<File>=[];
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:ApiproductService,private apidata1:ApicategoryService) { }

  ngOnInit() {
    this.getAllcategorys()
    this.getAllproviders()
      this.productForm = this.formBuilder.group({
          name: ['', Validators.required],
          prix: ['', Validators.required],
          description: ['', Validators.required],
          id_provider: ['', Validators.required],
          id_category: ['', Validators.required]
         
      });
  }


  handleFileInput(files: any){
    this.fileToUpload=<Array<File>>files.target.files;
    console.log(this.fileToUpload);
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

      let formdata=new FormData();
      formdata.append("name",this.productForm.value.name);
      formdata.append("prix",this.productForm.value.prix);
      formdata.append("description",this.productForm.value.description);
      formdata.append("id_provider",this.productForm.value.id_provider);
      formdata.append("id_category",this.productForm.value.id_category);
      formdata.append("file",this.fileToUpload[0]);

      // display form values on success

      this.apidata.addproduct(formdata).subscribe(res=>{
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

  getAllcategorys(){
    this.apidata1.getcategorys().subscribe((res:any)=>{
      this.listcategorys=res["date"]
      console.log("reponse",res)
    })
  }

  getAllproviders(){
    this.apidata1.getproviders().subscribe((res:any)=>{
      this.listproviders=res["date"]
      console.log("reponse",res)
    })
  }

}
