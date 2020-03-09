import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  str = 'Angular Course'
  pi = Math.PI
  per = 0.35
  now = new Date()
  obj = {
    name: 'ff',
    age: 20
  }

  constructor() { }

  ngOnInit() {
  }

}
