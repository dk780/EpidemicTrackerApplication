import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

constructor(private http: HttpClient) { }

saveLogin(LoginData){
  return this.http.post('http://localhost:59408/api/Users',LoginData);
}

UpdateLogin(LoginData){
  return this.http.put('http://localhost:59408/api/Users',LoginData);
}

GetAllLogin(){
  return this.http.get('http://localhost:59408/api/Users');
}

GetLoginById(loginId){
  return this.http.get('http://localhost:59408/api/Users/'+loginId,);
}

DeleteLoginById(loginId){
  return this.http.delete('http://localhost:59408/api/logins/'+loginId,);
}

}
