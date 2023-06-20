import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  @ViewChild('searchbar')
  searchbar!: ElementRef;
  @ViewChild('gosearchbar')
  gosearchbar!: ElementRef;
  isMenuOpen = false;


  searchText = '';
  gosearchText = '';
  site_name: any;
  windowScrolled = false;
  toggleSearch: boolean = false;
  navBar: boolean = false;
  itemStorage: any;
  value: boolean = false;
  closeMenu: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document,
    public router: Router) { }

  ngOnInit(): void {
    this.site_name = "Ganesha Restaurant";
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

  onToggleSideNav() {
    this.sidenavToggle.emit();
    console.log("header menu open");
  }

  onLogo() {
    this.router.navigate(["dashboard"]);
  }

  onCutlery() {
    this.router.navigate(["dashboard"]);
  }
  onClick() {
    this.value = !this.value;
    if (this.value) {
      this.navBar = true;

      console.log("toogle1-true")
    }
    else if (this.closeMenu) {
      this.navBar = true;
      console.log("closeclicked-true")
    }
    else {
      this.navBar = false;
      console.log("toogle2-false")
    }
  }

  onCLose() {
    this.closeMenu = true;
    this.navBar = false;
    console.log("close-faslse")
  }


}


