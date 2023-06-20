import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-notfoundpage',
  templateUrl: './notfoundpage.component.html',
  styleUrls: ['./notfoundpage.component.scss']
})
export class NotfoundpageComponent implements OnInit {
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  onClick()
  {
    this.router.navigate(["home"]);
  }
}
