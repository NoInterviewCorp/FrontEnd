import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/technology.model';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedTech: string = '';
  prefixPopularPlans = "Popular Learning Plans for ";
  popularPlans: string = '';
  hasClickedSearch = false;
  isNoSelected = false;
  showSearch = true;
  LearningPlan: Array<number> = [1, 2, 3, 4, 5];

  constructor(private testService: TestService ) { }

  ngOnInit() {
  }

  search() {
    this.hasClickedSearch = true;
    this.showSearch = false;
  }

  noToggle() {
    this.popularPlans = this.prefixPopularPlans + this.selectedTech;
    this.isNoSelected = true;
    this.hasClickedSearch = false;
    this.showSearch = false;
    console.log(this.popularPlans);
  }

  setTech(t:Technology) {
    this.testService.setTechName(t);
  }

}
