import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn : 'root'
})

export class SharedService {

    userDetails = [
        {name : 'Veeresh', job : 'Engineer', gender: 'male', country : 'india', age :29, avatar:'assets/veeresh.jpg'},
        {name : 'Janu', job : 'Engineer', gender: 'male', country : 'india', age:25, avatar:'assets/janu.jpg'},
        {name : 'Mohan', job : 'Gold Smith', gender: 'male', country : 'india', age:30, avatar:'assets/mohan.jpg'},
        {name : 'Shashi', job : 'Engineer', gender: 'male', country : 'india', age:32, avatar:'assets/shashi.jpg'}
      ];
      
    constructor(){}

    // showUserDetailes = new EventEmitter<{name : string, job : string, gender: string, country : string, age:number, avatar:string}>();
    showUserDetailes = new Subject<{name : string, job : string, gender: string, country : string, age:number, avatar:string}>();

    showOnClick(data : {name : string, job : string, gender: string, country : string, age:number, avatar:string}){
      // this.showUserDetailes.emit(data)
      this.showUserDetailes.next(data)
    }
    
    
}