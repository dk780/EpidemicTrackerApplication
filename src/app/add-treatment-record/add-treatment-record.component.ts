import { Component, OnInit } from '@angular/core';
import { AddRecordService } from './add-record.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-treatment-record',
  templateUrl: './add-treatment-record.component.html',
  styleUrls: ['./add-treatment-record.component.css']
})
export class AddTreatmentRecordComponent implements OnInit {
  addForm: FormGroup;
  addList;
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder, private http:HttpClient, private service: AddRecordService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      patientName:[''],
      pAge:[''],
      pGender:[''],
      pEmail:[''],
      aadharID:[''],
      pContact:[''],
      addressType:[''],
      streetNo:[''],
      area:[''],
      city:[''],
      state:[''],
      country:[''],
      zipCode:[''],
      occupationName:[''],
      occupationType:[''],
      organisationName:[''],
      organisationContact:[''],
      org_AddressType:[''],
      org_StreetNo:[''],
      org_Area:[''],
      org_City:[''],
      org_State:[''],
      org_Country:[''],
      org_ZipCode:[''],
      hospitalName:[''],
      contact:[''],
      hos_AddressType:[''],
      hos_StreetNo:[''],
      hos_Area:[''],
      hos_City:[''],
      hos_State:[''],
      hos_Country:[''],
      hos_ZipCode:[''],
      diseaseName:[''],
      diseaseType:[''],
      admittedDate:[''],
      prescription:[''],
      relievingDate:[''],
      isFatal:[''],
      currentstage:[''],

    });
    this.GetTreatmentRecordData();
  }
  OnSubmit(){
    this.service.saveTreatmentRecord(this.addForm.value).subscribe(data =>{
      console.log(data);
      alert('Data Added successfully');
    });
  }

  GetTreatmentRecordData(){
    this.service.GetAllTreatmentRecord().subscribe( data => {
      this.addList = data;
    });


}
}
