import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IVehicle } from '../interfaces/ivehicle';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const SERVICE_URL_SEARCH = 'https://drivetime-dev.search.windows.net/indexes/vehiclesindex/docs?api-version=2016-09-01&search=*&$top=100';
const SERVICE_KEY = '6DD9A9C266C35785AAB16C762F6FFF93';

@Injectable()
export class VehicleService {

  constructor(private http: Http) { }

  getVehicles(): Observable<IVehicle[]> {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('api-key', SERVICE_KEY);
    const options = new RequestOptions({ headers: headers });
    return this.http.get(SERVICE_URL_SEARCH, options).map(this.extractValue).catch(this.handleError);
  }

  getVehicle(id: number): Observable<IVehicle> {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('api-key', SERVICE_KEY);
    const options = new RequestOptions({ headers: headers });
    const url = SERVICE_URL_SEARCH + '&$filter=StockNumber eq ' + id;
    return this.http.get(url, options).map(this.extractValue).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractValue(res: any) {
    let body = res.json();
    return body.value || [];
  }

}
