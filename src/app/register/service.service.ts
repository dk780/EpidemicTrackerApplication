import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

constructor(private http: HttpClient) { }

saveLogin(LoginData){
  return this.http.post('http://localhost:59408/api/logins',LoginData);
}

UpdateLogin(LoginData){
  return this.http.put('http://localhost:59408/api/logins',LoginData);
}

GetAllLogin(){
  return this.http.get('http://localhost:59408/api/logins');
}

GetLoginById(loginId){
  return this.http.get('http://localhost:59408/api/logins/'+loginId,);
}

DeleteLoginById(loginId){
  return this.http.delete('http://localhost:59408/api/logins/'+loginId,);
}

}
