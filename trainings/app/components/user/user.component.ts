import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  users = {
    name: "",
    lastName: "",
    age: 0,
    gender: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  showForm2(){
    console.log(this.users)
  }

  // showForm(form){
  //   console.log(form.value)
  //   this.users.push(form.value)
  //   console.log(this.users)
  // }

}
