import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
 import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  model : any={};

  errorMessage:string;
  constructor(private fb: FormBuilder,private router:Router,private LoginService:LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });


}
  get f() { return this.loginForm.controls; }

  onSubmit(){
    debugger;
    this.LoginService.Login(this.model).subscribe(
      data => {
        debugger;
        if(data.Status=="Success")
        {
          this.router.navigate(['/create-treatmentrecord/']);
          debugger;
        }
        else{
          this.errorMessage = data.Message;
        }
      },
      error => {
        this.errorMessage = error.message;
      });
  };
 }
