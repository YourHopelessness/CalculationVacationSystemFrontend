import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { EmployeeInfo } from '../Models/EmployeeInfo';
import { MessageService } from './MessageService';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    private employeeUrl = 'api/Employee';

    constructor(private _http: HttpClient,
                private _messageService: MessageService) 
            { }

    employeeInfo(): Observable<EmployeeInfo> {
        var res = this._http.get<EmployeeInfo>(this.employeeUrl + "/GetMyInfo")
        .pipe(
            tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<EmployeeInfo>('employeeInfo'))
        );
        res.subscribe(responseData => console.log(responseData));
        return res;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); // log to console instead
          this.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
    }
    private log(message: string) {
        this._messageService.add(`HeroService: ${message}`);
    }
}