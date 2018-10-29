import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/services/communicator.service';

@Component({
  selector: 'app-contibutorhome',
  templateUrl: './contibutorhome.component.html',
  styleUrls: ['./contibutorhome.component.css']
})
export class ContibutorhomeComponent implements OnInit {

  constructor(private com: CommunicatorService) { }

  ngOnInit() {
    this.com.setTitle('Contribute');
  }

}
