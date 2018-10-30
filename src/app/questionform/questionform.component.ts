import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
//import { OptionForm } from './optionform.model';
import { Questions } from '../question.model';
import { Options } from '../option.model';
import { BloomTaxonomy } from '../bloomTaxonomy.model';


@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrls: ['./questionform.component.css']
})
export class QuestionformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
