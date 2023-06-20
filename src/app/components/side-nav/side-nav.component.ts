import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output() SideNavClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSideNavClose() {
    this.SideNavClose.emit();
    console.log("side-nav");
  }
}
