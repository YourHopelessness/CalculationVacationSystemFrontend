import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { AppService } from './app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() { }

  ngOnInit(): void {
  }
}
