import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';;
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppService {
    private greetUrl = 'api/WeatherForecast';

    // Resolve HTTP using the constructor
    constructor(private _http: HttpClient) { }

    forecast(): Observable<any> {
        return this._http.get<Observable<any>>(this.greetUrl);
    }
}