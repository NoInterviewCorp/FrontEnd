import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedTech : string;
  hasClickedSearch=false;
  isNoSelected=false;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.hasClickedSearch=true;
  }

  noToggle() {
    this.isNoSelected=true;
  }
}
