import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  developer = {
    name: '',
    gender: '',
    js: '',
    node: '',
    angular: '',
    position: '',
    email: ''
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }

  // sendForm() {
  //   console.log(this.developer);
  // }
  sendForm(form) {
    console.log(form);
  }
}
