import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  user :{name : string, job : string, gender: string, country : string, age :number, avatar:string}[]=[];

  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
    this.user = this.sharedService.userDetails
  }

  onClick(user :{name : string, job : string, gender: string, country : string, age :number, avatar:string}){
    this.sharedService.showOnClick(user) 
  }

}
