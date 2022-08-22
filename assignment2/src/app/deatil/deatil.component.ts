import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-deatil',
  templateUrl: './deatil.component.html',
  styleUrls: ['./deatil.component.scss']
})
export class DeatilComponent implements OnInit {
  details: any;
  id: any;
  
  constructor(public mysevre:AppserviceService) { }

  ngOnInit(): void {
    /*this.mysevre.getUser().subscribe(details=>{
      this.details=details;
      console.log('details',this.details);
    }) */
    this.id=this.mysevre.udetailId;
    this.mysevre.getUserdetails(this.mysevre.udetailId).subscribe(details=>{
      this.details=details;
    })
  }
  

}
