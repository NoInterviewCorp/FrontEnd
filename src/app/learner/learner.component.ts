import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css']
})
export class LearnerComponent implements OnInit {

  constructor() { }

  hasClickedTech : boolean;
  hasClickedSubs : boolean;
  hasClickedLearn : boolean;

  ngOnInit() {
    this.hasClickedTech=true;
  }

  clickedTech() {
    this.hasClickedTech=true;
    this.hasClickedSubs=false;
    this.hasClickedLearn=false;
  }

  clickedSubs() {
    this.hasClickedTech=false;
    this.hasClickedSubs=true;
    this.hasClickedLearn=false;
  }
  
  clickedLearn() {
    this.hasClickedTech=false;
    this.hasClickedSubs=false;
    this.hasClickedLearn=true;
  }

}
