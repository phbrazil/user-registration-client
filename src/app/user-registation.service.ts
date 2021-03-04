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
    //return this.http.get("http://localhost:8080/sistema-vendas/getAllClients");
  }

  public getClientByEmail(email){
    return this.http.get("http://www.cyberoficina.com.br:8080/sistema-vendas/findClient/"+email);
    //return this.http.get("http://localhost:8080/sistema-vendas/findClient/"+email);
  }

  public getClientByCpf(cpf){
    return this.http.get("http://www.cyberoficina.com.br:8080/sistema-vendas/findClientCPF/"+cpf);
  }


  public deleteUser(id){
    //return this.http.delete("http://localhost:8080/sistema-vendas/deleteClient/"+id);

    return this.http.delete("http://www.cyberoficina.com.br:8080/sistema-vendas/deleteClient/"+id);
  }
}
