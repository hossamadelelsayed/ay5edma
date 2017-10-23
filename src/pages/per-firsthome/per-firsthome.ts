import { ServRequestsPage } from './../serv-requests/serv-requests';
import { ProfilePage } from './../profile/profile';
import { SettingsPage } from './../settings/settings';
import { PerHomePage } from './../per-home/per-home';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerFirsthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-firsthome',
  templateUrl: 'per-firsthome.html',
})
export class PerFirsthomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerFirsthomePage');
  }
  secondHome(){
    this.navCtrl.push(PerHomePage);
  }
  settings(){
    this.navCtrl.push(SettingsPage);
  }
  editprofile(){
    this.navCtrl.push(ProfilePage);
  }
  goinbox(){
    this.navCtrl.push(ServRequestsPage);
  }
}
