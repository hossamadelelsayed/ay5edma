import { PerFirsthomePage } from './../per-firsthome/per-firsthome';
import { ProfilePage } from './../profile/profile';
import { ServRequestsPage } from './../serv-requests/serv-requests';
import { SettingsPage } from './../settings/settings';
import { PerRestPage } from './../per-rest/per-rest';
import { PerHotelsPage } from './../per-hotels/per-hotels';
import { PerOtherPage } from './../per-other/per-other';
import { PerRealestatePage } from './../per-realestate/per-realestate';
import { PerTechcatPage } from './../per-techcat/per-techcat';
import { PerSellPage } from './../per-sell/per-sell';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-home',
  templateUrl: 'per-home.html',
})
export class PerHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerHomePage');
  }
  gosellitems(){
    this.navCtrl.push(PerSellPage);
  }
  gotechnicians(){
    this.navCtrl.push(PerTechcatPage);
  }
  gorealestate(){
    this.navCtrl.push(PerRealestatePage);
  }
  gohotel(){
    this.navCtrl.push(PerHotelsPage);
  }
  gorestaurant(){
    this.navCtrl.push(PerRestPage);
  }
  goother(){
    this.navCtrl.push(PerOtherPage);
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
  firstHome(){
    this.navCtrl.push(PerFirsthomePage)
  }
}
