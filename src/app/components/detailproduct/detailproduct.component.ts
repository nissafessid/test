import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiproductService } from 'src/app/services/apiproduct.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  product:any
  id=this.activeroute.snapshot.params.id
  constructor(private apidata:ApiproductService, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getoneproduct()
  }
   

  getoneproduct(){
    this.apidata.getproductById(this.id).subscribe((res:any)=>{
      this.product=res["date"]
      console.log("reponse",res)
    })
  }
}
