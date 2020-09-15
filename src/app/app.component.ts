import { Component } from '@angular/core';
import {ServiceService} from './register/service.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EpidemicTrackerAngular';

  constructor(private ServiceService: ServiceService){ }
  data: any;
  RegisterForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";


}

