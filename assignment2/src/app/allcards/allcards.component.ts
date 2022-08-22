import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';


@Component({
  selector: 'app-allcards',
  templateUrl: './allcards.component.html',
  styleUrls: ['./allcards.component.scss']
})
export class AllcardsComponent implements OnInit {
  data: any;
  //@Input() title: any;
  //@Input() city: any;
  //@Input() email: any;
  constructor(public myservice:AppserviceService) { }

  ngOnInit(): void {
    this.myservice.getUser().subscribe(data=>{
      this.data=data;
      //this.data = this.data.slice(0,5);
      console.log(this.data);
    })
  }
  btnclk(evt:any){
    this.myservice.udetailId=evt.target.id;
  }

}
