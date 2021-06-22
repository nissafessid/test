import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApicategoryService } from 'src/app/services/apicategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {

  listcategorys:any
  categoryForm: FormGroup;
  submitted=false
  constructor(private apidata:ApicategoryService,private formBuilder: FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllcategorys()
    this.categoryForm = this.formBuilder.group({
      _id: ['', Validators.required],

      title: ['', Validators.required],
     
      description: ['', Validators.required]
     
  });
  }
  getAllcategorys(){
    this.apidata.getcategorys().subscribe((res:any)=>{
      this.listcategorys=res["date"]
      console.log("reponse",res)
    })
  }
  get f() { return this.categoryForm.controls; }

  deletecategory(id:any){
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
       this.apidata.deletecategoryt(id).subscribe(res=>{
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getAllcategorys()
       })
      }
    })
  }

  open(content:any,category:any) {
    this.categoryForm.setValue({
      _id:category._id,
      title:category.title,
      description:category.description,
     

      
    })

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }


  updateCategory(){
    this.apidata.updatecategory(this.categoryForm.value._id,this.categoryForm.value).subscribe(res=>{
      console.log(res,"update product")
      Swal.fire(
        'Category UPDATE!',
        'Your category has been updated.',
        'success'
      )

      this.getAllcategorys()
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
