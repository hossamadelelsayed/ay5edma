

import {Person} from "../../person/person";
export abstract class Technician extends Person{
  public nationality : string ;
  public availableHours : number ;
  public experience : number ;
  public phones: string[] ;
  public skills: string[] ;
  public languages: string[] ;
  public certificates: string[] ;
  constructor(){
    super();
  }
  public validateTech() : boolean{
    if(this.validatePerson() &&
      this.nationality != null  &&
      this.availableHours != null &&
      this.experience != null &&
      this.phones.length > 1 &&
      this.languages.length > 1)
      return true ;
    else return false ;
  }

}
