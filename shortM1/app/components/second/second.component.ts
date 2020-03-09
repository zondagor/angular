import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  currentSwitch = false;
  vis = true
  people= [
    {name: 'bob', age: 20},
    {name: 'bobo', age: 40},
    {name: 'bab', age: 90},
    {name: 'bib', age: 10}
  ]
  isError = false;

  constructor() {
    setTimeout(() => {
      this.vis = false
    }, 3000),
    setTimeout(() => {
      this.isError = true
    }, 3000)
  }

  ngOnInit() {
  }

  changeSwitch(val){
    this.currentSwitch = val;
  }
}
