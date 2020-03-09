import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() initialNumber;
  @Output() onBtClick = new EventEmitter();
  @Output() delteteClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  increase() {
    this.initialNumber++;
  }
  decrease() {
    this.initialNumber--;
  }

  goFather() {
    this.onBtClick.emit(this.initialNumber)
  }

  delete() {
    this.delteteClick.emit(this.initialNumber)
  }

}
