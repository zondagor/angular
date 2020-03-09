import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr = [5, 2, 8, 12]
  title = 'ng-hm';
  genNum = 0;

  msg(num){
    this.genNum = num;
    alert("general number has been changed")
    
  }

  deleteChild(num){
    this.arr.splice(this.arr.indexOf(num), 1)    
  }
}
