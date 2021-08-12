import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service';
import { EmployeeInfo } from '../Models/EmployeeInfo';
import { EmployeeService } from '../Services/EmployeeService';

@Component({
  selector: 'app-current-year',
  templateUrl: './current-year.component.html',
  styleUrls: ['./current-year.component.scss']
})
export class CurrentYearComponent implements OnInit {
  public info : EmployeeInfo = {fullName : "", departName : "", chiefFullName : ""};

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.employeeInfo()
      .subscribe(
      result => {
        this.info = result;
      }
      );
  }

}
