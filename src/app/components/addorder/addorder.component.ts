import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiorderService } from 'src/app/services/apiorder.service';
import { ApiproductService } from 'src/app/services/apiproduct.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  listproducts:any
  listorders:any
  orderForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:ApiorderService,private apidata1:ApiproductService) { }

  ngOnInit() {
   this.getAllproducts()
      this.orderForm = this.formBuilder.group({
          date: ['', Validators.required],
          price: ['', Validators.required],
          id_product: ['', Validators.required]

         
      });
  }






  // convenience getter for easy access to form fields
  get f() { return this.orderForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.orderForm.invalid) {


        console.log(this.orderForm.value)
          return;
      }

     

      // display form values on success

      this.apidata.addorder(this.orderForm.value).subscribe(res=>{
        Swal.fire(
          'added!',
          'Your order has been added.',
          'success'
        )
        this.route.navigateByUrl('/home/order')
       })
     
  }

  onReset() {
      this.submitted = false;
      this.orderForm.reset();
  }

  getAllproducts(){
    this.apidata1.getproducts().subscribe((res:any)=>{
      this.listproducts=res["date"]
      console.log("reponse",res)
    })
  }

}
