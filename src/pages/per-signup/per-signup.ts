import { PerLocationPage } from './../per-location/per-location';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-signup',
  templateUrl: 'per-signup.html',
})
export class PerSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerSignupPage');
  }
  golocations(){
    this.navCtrl.push(PerLocationPage);
  }
}
