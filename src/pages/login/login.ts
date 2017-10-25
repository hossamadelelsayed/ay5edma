import { PerFirsthomePage } from './../per-firsthome/per-firsthome';
import { PerHomePage } from './../per-home/per-home';
import { ForgetpasswordPage } from './../forgetpassword/forgetpassword';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {PersonProvider} from "../../providers/person/person";
import {CommonProvider} from "../../providers/common/common";
import {PersonLoginCred} from "../../models/person/person-login-credentials";
import {PersonFBCredentials} from "../../models/person/person-firebase-credentials";
import {ChatProvider} from "../../providers/chat/chat";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public mobile : number ;
  public password : string ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public personService : PersonProvider ,public commonService: CommonProvider ,
              public chatService : ChatProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goforgetpass(){
    this.navCtrl.push(ForgetpasswordPage);
  }
  goperhome(){
    this.personService.personLogin(new PersonLoginCred(this.mobile,this.password)).subscribe((person:any)=>{
      console.log(person);
      this.personService.activePerson = this.personService.preparePersonObj(person);
      this.personService.FBLogin(new PersonFBCredentials(person.email,this.password)).then(()=>{
        this.chatService.attachReceivedChatListener();
        this.commonService.successToast();
        this.navCtrl.push(PerFirsthomePage);
      }).catch((err)=>console.log(err));
    });

  }
}
