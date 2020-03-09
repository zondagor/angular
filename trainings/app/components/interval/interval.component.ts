import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  xxx = 2

  numb: number = 0;
  constructor() {
    setInterval(() => {this.numb++}, 1000)
   }

  ngOnInit() {
  }


  reset(){
    this.numb = 0;
  }
}
