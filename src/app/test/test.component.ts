import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Technology } from '../technology.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   selectedTech : any;

  questions = [];
  duration = 20; //timer duration
  counter: number = this.duration;
  i: number = 0;
  questionCounter = 0;
  selectedOption: string;
  shouldDisplayQuestions = false;
  currentQuestion: any;
  showTimer = false;
  showNextButton = false;
  showQuesButton = true;
  showProgressBar = false;
  quesCount = 0;
  totalQues = 0;
  callResult = false;
  value = 0;
  valueInc = 0;

  techName: string; subTopicName: string;


  constructor(private testService: TestService) { }

  ngOnInit() {
  }
  
   display() {
     this.testService.getQuestions();
   }
}
