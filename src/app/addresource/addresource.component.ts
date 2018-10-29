import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddresourceComponent implements OnInit {
  hasClickedAdd:boolean;
  resources: Array<number> = [1];
  lastNumber = this.resources.length;
  constructor() { }

  ngOnInit() {
  }

  addResource() {
    //console.log("clicked");
    this.hasClickedAdd = true;
    this.resources.push(++this.lastNumber);
  }

}
