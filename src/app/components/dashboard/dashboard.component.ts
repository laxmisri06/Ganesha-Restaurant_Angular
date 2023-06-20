
import { Component, ElementRef, HostListener, Inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class DashboardComponent implements OnInit {
  @ViewChild('searchbar')
  searchbar!: ElementRef;
  @ViewChild('gosearchbar')
  gosearchbar!: ElementRef;


  searchText = '';
  gosearchText = '';
  site_name: any;
  windowScrolled = false;

  toggleSearch: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document,
    public router: Router) { }
  scrollToTop(): void {
    // scroll to the top of the body
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }

  ngOnInit(): void {
    this.site_name = "Ganesha Restaurant";
  }

  onClicmenu() {
    this.router.navigate(["allviewmoredishes"]);
  }

  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }

  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }

  goSearch() {
    this.toggleSearch = true;
    this.gosearchbar.nativeElement.focus();
  }

  onViewMore() {
    this.router.navigate(["allviewmoredishes"]);
  }


}
