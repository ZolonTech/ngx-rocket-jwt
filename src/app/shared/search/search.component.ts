import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchEmitter = new EventEmitter();
  isLoading: boolean;
  zipCode = '';

  constructor() { }
// private searchService: SearchService
  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  submit(): void {
    // this.searchService.searchByZipCode(this.zipCode).subscribe((result) => {
    //   this.zipCode = '';
    //   this.searchEmitter.emit(result);
    // });
  }
}
