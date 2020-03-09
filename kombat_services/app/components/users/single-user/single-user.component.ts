import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  @Input() userInput:UserModel;
  @Output() deleteMe = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  delUser(){
    this.deleteMe.emit(this.userInput)
  }

}
