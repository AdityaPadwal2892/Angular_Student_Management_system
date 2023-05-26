import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor()
  {

  }
  ngOnInit():void
  {

  }

  //here we are writing the code for storing the details in local storage
  user_records:any[]=[];   //we creating the arrays to store the records
  data={
    name:"",
    email:"",
    mobile:"",
    address:"",
    password:""
  }

  doRegistration(Values:any)
  {
     this.user_records=JSON.parse(localStorage.getItem('users')||'{}');  //json is used to converting the string into object
     //the above line first converts the string into object withe help of JSON
     //and after with the help of 'users' it will retrive the all data entered by user
     //and '{}' is used to show that no data is entered by user, means return empty array


     if(this.user_records.some((v)=>
     {
      return v.email==this.data.email
     }))
     {
      alert('Duplicate Data');
     }
     else{
      this.user_records.push(this.data)
      localStorage.setItem("users",JSON.stringify(this.user_records));
      alert("Hi"+this.data.name+"You are successfull Register");
     }
  }
}
