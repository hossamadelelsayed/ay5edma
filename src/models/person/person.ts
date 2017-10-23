export abstract class Person {
  public static readonly USER_MODE = "1";
  public type : string ;
  constructor(){
  }

  public abstract validate();
  public validatePerson():boolean{
    // if()
    //   return true ;
    // else return false ;
    return true;
  }
}
