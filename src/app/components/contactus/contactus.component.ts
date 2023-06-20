import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  onClickhome() {
    this.router.navigate(["home"]);
  }
}
