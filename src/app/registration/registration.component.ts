import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistationService } from '../user-registation.service';
import { NgxMaskModule, IConfig } from 'ngx-mask'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent implements OnInit {
  

  user: User=new User();
  message:any;


  isCPF(): boolean{
    return this.user.cpf == null ? true : this.user.cpf.length < 12 ? true : false;
 }
 
 getCpfCnpjMask(): string{
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
 }

  constructor(private service:UserRegistationService) { }

  ngOnInit() {
  }
  

  public registerNow(){
let resp=this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);
  }

}
