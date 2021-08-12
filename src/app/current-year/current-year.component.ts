import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service';

@Component({
  selector: 'app-current-year',
  templateUrl: './current-year.component.html',
  styleUrls: ['./current-year.component.scss']
})
export class CurrentYearComponent implements OnInit {
  greetings = '';

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.forecast()
      .subscribe(
      result => {
        this.greetings = result;
      }
      );
  }

}
