import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthentifictionService } from 'src/app/services/authentifiction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  listusers:any
  userForm: FormGroup;
  submitted=false
  term_search:any=""
  p:number=1
  constructor(private formBuilder: FormBuilder,private apidata:AuthentifictionService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllusers()
    this.userForm = this.formBuilder.group({
      _id: ['', Validators.required],

      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      role: ['', Validators.required]


     
  });
  }


  
  getAllusers(){
    this.apidata.getusers().subscribe((res:any)=>{
      this.listusers=res["data"]
      console.log("reponse",res)
    })
  }

  get f() { return this.userForm.controls; }

  deleteuser(id:any){
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
       this.apidata.deleteuser(id).subscribe(res=>{
        Swal.fire(
          'Deleted!',
          'Your user has been deleted.',
          'success'
        )
        this.getAllusers()
       })
      }
    })
  }



  open(content:any,product:any) {
    this.userForm.setValue({
      name:product.name,
      _id:product._id,

      email:product.email,
      password:product.password,
      phone:product.phone,
      role:product.role


    })

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }


  updateuser(){
    this.apidata.updateuser(this.userForm.value._id,this.userForm.value).subscribe(res=>{
      console.log(res,"update user")
      Swal.fire(
        'User UPDATE!',
        'Your user has been updated.',
        'success'
      )

      this.getAllusers()
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
