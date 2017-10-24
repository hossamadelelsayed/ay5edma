import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "../main-service";
import {User} from "../../models/user/user";
import {Observable} from "rxjs";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  public userRegisterUrl : string = MainService.baseUrl+"normalusers";
  public getSpecialAddsUrl : string =  MainService.baseUrl+"getspecailads";

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }
  register(user : User):Observable<any>{
      let body = {
        name: user.name,
        mobile : user.mobile,
        password: user.password,
        email : user.email ,
        type : user.type,
        u_id : user.uid,
        Locatoin : user.locations
       };
      return this.http.post(this.userRegisterUrl,body).map((res) => res.json());
  }
  getSpecialAdds():Observable<any>{
    return this.http.get(this.getSpecialAddsUrl).map((res) => res.json());
  }
}
