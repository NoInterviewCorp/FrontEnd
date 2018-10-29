import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../../services/communicator.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private com: CommunicatorService) { }

  ngOnInit() {
  }
  
  titleFromComponent(){
    return this.com.getTitle();
  }

}
