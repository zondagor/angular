import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  goWelcome(){
    this.router.navigate([''])
  }

  goHome() {
    this.router.navigate(['home'])
  }
  goAbout() {
    this.router.navigate(['about'], {queryParams: {yyy: 'xxx'}})

  }
  
}
