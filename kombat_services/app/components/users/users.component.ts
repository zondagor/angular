import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  ngOnInit() {}

  delChildComp(user) {
    console.log(user.name);
    this.users.splice(this.users.indexOf(user), 1);
  }

  onSubmit(ref) {
    let f = ref.value;
    this.users.push(f);
    console.log(this.users);
  }
}
