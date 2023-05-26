import { Component } from '@angular/core';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent {

  user_records:any[]=[];
  data=
  {
    name:"",
    email:"",
    mobile:"",
    address:"",
    password:""
  }

  //we are using the constructor to fetch the data

  constructor()
  {
    this.user_records=JSON.parse(localStorage.getItem('users')|| '{}')
  }

}
