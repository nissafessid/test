import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicategoryService } from 'src/app/services/apicategory.service';

@Component({
  selector: 'app-detailcategory',
  templateUrl: './detailcategory.component.html',
  styleUrls: ['./detailcategory.component.css']
})
export class DetailcategoryComponent implements OnInit {

  category:any
  id=this.activeroute.snapshot.params.id
  constructor(private apidata:ApicategoryService, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getonecategory()
  }

  getonecategory(){
    this.apidata.getcategoryById(this.id).subscribe((res:any)=>{
      this.category=res["date"]
      console.log("reponse",res)
    })
  }

}
