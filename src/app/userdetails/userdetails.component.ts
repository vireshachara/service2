import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  recievedData: { name: string; job: string; gender: string; country: string; age: number; avatar: string; };

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.showUserDetailes.subscribe((data : {name : string, job : string, gender: string, country : string, age :number, avatar:string} )=>{
      this.recievedData = data;
    })
  }

}
