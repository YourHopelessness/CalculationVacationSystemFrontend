import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';;
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { EmployeeInfo } from './Models/EmployeeInfo';

@Injectable()
export class AppService {

    constructor(private _http: HttpClient) { }
}