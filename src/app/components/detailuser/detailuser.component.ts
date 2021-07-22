import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentifictionService } from 'src/app/services/authentifiction.service';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {

  user:any
  id=this.activeroute.snapshot.params.id
  constructor(private apidata:AuthentifictionService, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getoneuser()
  }

  getoneuser(){
    this.apidata.getuserById(this.id).subscribe((res:any)=>{
      this.user=res["data"]
      console.log("reponse",res)
    })
  }

}
