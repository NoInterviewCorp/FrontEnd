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

  constructor(private testService: TestService) { }

  ngOnInit() {
  }
  
   display() {
     this.selectedTech = this.testService.getTechName();
     console.log(this.selectedTech);
   }
}
