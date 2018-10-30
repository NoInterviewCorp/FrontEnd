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
  LearningPlan: Array<number> = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.hasClickedSearch=true;
  }

  noToggle() {
    this.isNoSelected=true;
    this.hasClickedSearch=false;
  }

}
