import { Component } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})


export class AddUserComponent implements User {
  
  users: Array<User> = [];

  onSubmit(ref) {
    console.log(ref.valid);
    let f = ref.value.age;
    console.log(typeof f);
    this.users.push(ref.value);
  }
}


