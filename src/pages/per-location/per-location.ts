import { PerMapPage } from './../per-map/per-map';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-location',
  templateUrl: 'per-location.html',
})
export class PerLocationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerLocationPage');
  }
  gomap(){
    this.navCtrl.push(PerMapPage);
  }
}
