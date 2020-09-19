import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AddRecordService {

constructor(private http: HttpClient) { }

saveTreatmentRecord(AddData){
  return this.http.post('http://localhost:59408/api/TreatmentRecords',AddData);
}

GetAllTreatmentRecord(){
  return this.http.get('http://localhost:59408/api/TreatmentRecords');
}

}
