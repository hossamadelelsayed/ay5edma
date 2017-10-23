import { IndivSignupPage } from './../indiv-signup/indiv-signup';
import { ServSignupPage } from './../serv-signup/serv-signup';
import { PerSignupPage } from './../per-signup/per-signup';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
gisignup(){
  this.navCtrl.push(PerSignupPage);
}
servsignup(){
  this.navCtrl.push(ServSignupPage);
}
indivSignup(){
  this.navCtrl.push(IndivSignupPage);
}
}
