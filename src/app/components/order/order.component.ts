import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiorderService } from 'src/app/services/apiorder.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  listorders:any
  orderForm: FormGroup;
  submitted=false
  constructor(private apidata:ApiorderService,private formBuilder: FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllorders()
    this.orderForm = this.formBuilder.group({
      _id: ['', Validators.required],

      date: ['', Validators.required],
     
      price: ['', Validators.required]
     
  });
  }
  getAllorders(){
    this.apidata.getorders().subscribe((res:any)=>{
      this.listorders=res["data"]
      console.log("reponse",res)
    })
  }
  get f() { return this.orderForm.controls; }

  deleteorder(id:any){
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
       this.apidata.deleteorder(id).subscribe(res=>{
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getAllorders()
       })
      }
    })
  }

  open(content:any,order:any) {
    this.orderForm.setValue({
      _id:order._id,
      date:order.date,
      price:order.price,
     

      
    })

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }


  updateorder(){
    this.apidata.updateorder(this.orderForm.value._id,this.orderForm.value).subscribe(res=>{
      console.log(res,"update order")
      Swal.fire(
        'order UPDATE!',
        'Your order has been updated.',
        'success'
      )

      this.getAllorders()
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
