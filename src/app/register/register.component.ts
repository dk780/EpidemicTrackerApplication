import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerList;
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder, private http:HttpClient, private service: ServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:[''],
      gender:[''],
      email:[''],
      contact:[''],
      password:[''],
      confirmPassword:[''],
      roleName:[''],
    });
    this.GetLoginData();
  }
  OnSubmit(){
    this.service.saveLogin(this.registerForm.value).subscribe(data =>{
      console.log(data);
    });
  }

  GetLoginData(){
    this.service.GetAllLogin().subscribe( data => {
      this.registerList = data;
    });
  }

}
