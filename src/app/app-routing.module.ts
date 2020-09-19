import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddTreatmentRecordComponent } from './add-treatment-record/add-treatment-record.component';


const routes: Routes = [{path: '',   redirectTo: 'home', pathMatch: 'full' },{path: 'registration', component:RegisterComponent},
{path:'home', component:HomeComponent},{path:'login', component:LoginComponent},
{path:'treatmentrecord',component:AddTreatmentRecordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
