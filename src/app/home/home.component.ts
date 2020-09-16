import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  treatmentRecordForm: FormGroup;
  stateList;

  constructor(private fb: FormBuilder, private http:HttpClient, private service: HomeService) { }

  ngOnInit(): void {
    this.treatmentRecordForm = this.fb.group({
      state:[''],
      totalAffected:[''],
      cured:[''],
      unCured:[''],
      fatality:[''],

    });
    this.GetStatesData();
  }


  GetStatesData(){
    this.service.GetAllStates().subscribe( data => {
      this.stateList = data;
    });
  }

}
