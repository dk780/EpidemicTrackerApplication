import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private http:HttpClient, private service: ServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:['',[Validators.required, Validators.minLength(4)]],
      gender:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      contact:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(4)]],
      confirmPassword:['',Validators.required],
      roleName:['',Validators.required],
    });
  }


  OnSubmit(){
    this.service.saveLogin(this.registerForm.value).subscribe(data =>{
      console.log(data);

      alert('Successfully Registered)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    });
  }

}
