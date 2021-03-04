import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(user){
    return this.http.post("http://www.cyberoficina.com.br:8080/sistema-vendas/registerClient",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://www.cyberoficina.com.br:8080/sistema-vendas/getAllClients");
  }

  public getUserByEmail(email){
    return this.http.get("http://localhost:9090/findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
}
