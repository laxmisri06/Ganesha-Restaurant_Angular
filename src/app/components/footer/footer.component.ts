import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class FooterComponent implements OnInit {

  @ViewChild('searchbar')
  searchbar!: ElementRef;
  @ViewChild('gosearchbar')
  gosearchbar!: ElementRef;
  searchText = '';
  gosearchText ='';
  site_name : any;
  windowScrolled = false;
  toggleSearch: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.site_name = "Ganesha Restaurant";
  }

  goSearch()
  {
    this.toggleSearch = true;
    this.gosearchbar.nativeElement.focus();
  }
}
