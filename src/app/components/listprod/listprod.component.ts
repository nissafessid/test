import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiproductService } from 'src/app/services/apiproduct.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listprod',
  templateUrl: './listprod.component.html',
  styleUrls: ['./listprod.component.css']
})
export class ListprodComponent implements OnInit {
  listproducts:any
  productForm: FormGroup;
  submitted=false
  constructor(private formBuilder: FormBuilder,private apidata:ApiproductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllproducts()
    this.productForm = this.formBuilder.group({
      _id: ['', Validators.required],

      name: ['', Validators.required],
      prix: ['', Validators.required],
      description: ['', Validators.required]
     
  });
  }


  
  getAllproducts(){
    this.apidata.getproducts().subscribe((res:any)=>{
      this.listproducts=res["date"]
      console.log("reponse",res)
    })
  }

  get f() { return this.productForm.controls; }

  deleteproduct(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       this.apidata.deleteproduct(id).subscribe(res=>{
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getAllproducts()
       })
      }
    })
  }



  open(content:any,product:any) {
    this.productForm.setValue({
      name:product.name,
      _id:product._id,

      description:product.description,
      prix:product.prix
    })

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }


  updateProduct(){
    this.apidata.updateproduct(this.productForm.value._id,this.productForm.value).subscribe(res=>{
      console.log(res,"update product")
      Swal.fire(
        'PRODUCT UPDATE!',
        'Your product has been updated.',
        'success'
      )

      this.getAllproducts()
     })
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
