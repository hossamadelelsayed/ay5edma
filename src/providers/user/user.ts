import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "../main-service";
import {User} from "../../models/user/user";
import {Observable} from "rxjs";
import {SalesRequest} from "../../models/user/sales/sales-request";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  public userRegisterUrl : string = MainService.baseUrl+"normalusers";
  public getSpecialAddsUrl : string =  MainService.baseUrl+"getspecailads";
  public getSalesCategoryUrl : string =  MainService.baseUrl+"salescategory";
  public setItemUrl : string = MainService.baseUrl+"setItems";
  public getSalesByCatUrl : string = MainService.baseUrl+"getadsbycatid/";
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
  getSalesByCat(catID : number):Observable<any>{
    return this.http.get(this.getSalesByCatUrl+catID).map((res) => res.json());
  }
  getSpecialAdds():Observable<any>{
    return this.http.get(this.getSpecialAddsUrl).map((res) => res.json());
  }
  getSalesCategory():Observable<any>{
    return this.http.get(this.getSalesCategoryUrl).map((res) => res.json());
  }
  setItem(salesRequest:SalesRequest):Observable<any>{
    return this.http.post(this.setItemUrl,salesRequest).map((res) => res.json());
  }

}
