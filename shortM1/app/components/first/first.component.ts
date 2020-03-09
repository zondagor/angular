import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  secret;

  value = 'any';

  title:string = 'Initital Project';
  isCLicked:boolean = false;
  now = new Date();  
  name = 'default'

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((query) => {
      console.log(query)
      this.secret = query.secret
    })
  }

  btClick(){
    this.isCLicked = !this.isCLicked;
  }

  setName($event){
    console.log($event)
    this.name = $event.target.value
  }

  changeHash(input){
    this.value = input.value;
  }
}
