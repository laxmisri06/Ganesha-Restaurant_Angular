import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allviewmoredishes',
  templateUrl: './allviewmoredishes.component.html',
  styleUrls: ['./allviewmoredishes.component.scss']
})
export class AllviewmoredishesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  onClickhome() {
    this.router.navigate(["home"]);
  }
}
