import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Technology } from 'src/app/technology.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  tech : Technology;

  setTechName(t:Technology) {
    this.tech=t;
  }
  getTechName() {
    return this.tech;
  }
 
  getQuestions() {
    // let selectedTech=this.tech.find(x=>x.Name==this.Name);
    // console.log(this.tech);
    // if(selectedTopic!=null)
    // { 
    //   return selectedTopic.Questions;
    // }
    // return null;
    console.log("ques for:"+this.tech);
    
    console.log(this.tech.Questions);
    
  }

 
}
