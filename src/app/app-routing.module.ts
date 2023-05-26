import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { HomeComponent } from './home/home.component';


//this are the routing methods 
//as we write localhost:4200/comonent name then it will register to the particular component
const routes: Routes = [

  {
    path:"register",
    component:RegisterComponent
  },

  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"showuser",
    component:ShowuserComponent

  },
  {
    path:"",
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
