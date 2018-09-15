import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
//import 'rxjs/observable';

@Injectable()
export class HttpService {
    private baseUrl: string;

    constructor(private _http: HttpClient) {
        if (environment.production) {
            this.baseUrl = 'https://tcfqa.icreontech-dev.com/api/';
           
        } else {
            
            this.baseUrl = 'https://tcfqa.icreontech-dev.com/api/';
        }
    }

    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    post(apiUrl, data) {
        const url = this.baseUrl + apiUrl;
        return this._http.post(url, data, this.httpOptions)
            .catch(this.errorHandler);
    }

    get(apiUrl) {
        const url = this.baseUrl + apiUrl;
        return this._http.get(url, this.httpOptions)
            .catch(this.errorHandler);
    }

    getWithData(url, data) {
        return this._http.get(url + data, this.httpOptions)
            .catch(this.errorHandler);
    }

    private errorHandler(error: Response | any) {
        return Observable.throw(error.status);
    }

    isNullSelected(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            if (control.value === '0' || control.value === 0) {
                resolve({ 'nullSelected': true });
            } else {
                resolve(null);
            }
        });
        return promise;
    }
}
