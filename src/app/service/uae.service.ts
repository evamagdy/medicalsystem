import { Injectable } from '@angular/core';
import { Uae } from './uae';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UaeService {
  // node/express api
  
  Rest_API: string = 'https://medicalsystem.herokuapp.com/uae';
  // Rest_API: string = 'http://localhost:3000/uae';
  // http headers
  httpHeaders = new HttpHeaders().set('content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }
  // GET DATA
  getUaeData(): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}`);
  }
  getHospitalsData(): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}/hospitals`);
  }
  getHospitalsDetails(hospitalId): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}/hospitals/${hospitalId}`);
  }

  getInsuranceData():Observable<any>{
    return this.httpClient.get(`${this.Rest_API}/insurance-companies`);
  }
  getInsuranceDetails(insurancelId): Observable<any> {
    return this.httpClient.get(`${this.Rest_API}/insurance-companies/${insurancelId}`);
  }
}
