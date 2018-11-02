import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Technology } from 'src/app/technology.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  tech : Technology;
  sTopic : string;

  setTechName(t:Technology) {
    this.tech=t;
  }
  getTechName() {
    return this.tech;
  }
 
  getQuestions() {
  //   let selectedTopic=this.tech.Topics.find(x=>x.Name==this.sTopic);
  //   console.log(this.tech);
  //   if(selectedTopic!=null)
  //   { 
  //     return selectedTopic.Questions;
  //   }
  //   return null;
   }
 
}
