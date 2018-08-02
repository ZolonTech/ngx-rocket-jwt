import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // offices: OfficeLocation[] = [];
  // office: OfficeLocation = null;

  constructor() {

  }

  ngOnInit() {
  }

  // handleSearchData($event: OfficeLocation[]): void {
  //   this.offices = $event;
  //   if (this.offices.length === 1) {
  //     this.office = this.offices[0];
  //   }
  // }

}
