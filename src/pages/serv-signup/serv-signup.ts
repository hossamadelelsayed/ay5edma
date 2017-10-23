import { ServSignipindusPage } from './../serv-signipindus/serv-signipindus';
import { ServHomePage } from './../serv-home/serv-home';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-serv-signup',
  templateUrl: 'serv-signup.html',
})
export class ServSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServSignupPage');
  }
  goHome(){
    this.navCtrl.push(ServHomePage);
  }
  signupindus(){
    this.navCtrl.push(ServSignipindusPage);
  }
}
