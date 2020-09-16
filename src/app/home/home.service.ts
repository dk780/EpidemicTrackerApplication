import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  GetAllStates(){
    return this.http.get('http://localhost:59408/api/TreatmentRecords/GetStates');
  }


  }
