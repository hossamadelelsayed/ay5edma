import {Location} from "./location";
export abstract class Person {
  public static readonly USER_MODE : string = "1";
  public type : string ;
  public name : string ;
  public mobile : number ;
  public password : string ;
  public email : string ;
  public uid : string ;
  public id : number ;
  public locations: Location[] = [];
  constructor(){
  }

  public abstract validate();
  public validatePerson():boolean{
     if(this.name != null && this.name.trim() != "" &&
       this.email != null && this.email.trim() != "" &&
       this.password != null && this.password.trim() != "" &&
       this.mobile != null  &&
      this.locations.length > 0)
      return true ;
    // else return false ;

     }
}
