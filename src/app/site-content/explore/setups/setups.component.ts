import { Component, OnInit } from '@angular/core';
import {SetupsService} from "../../../shared/services/setups.service";

@Component({
  selector: 'app-setups',
  templateUrl: './setups.component.html',
  styleUrls: ['./setups.component.scss']
})
export class SetupsComponent implements OnInit {

  setups: SetupModel[];

  constructor( private setupsService: SetupsService) { }

  ngOnInit() {
    this.loadSetups();
  }

  loadSetups() {

    this.setupsService.loadSetups().subscribe(w => {
      this.setups = w;
    });
  }

}
