import { PerItemdetailsPage } from './../per-itemdetails/per-itemdetails';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerOtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-other',
  templateUrl: 'per-other.html',
})
export class PerOtherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerOtherPage');
  }
  goitemdetails(){
    this.navCtrl.push(PerItemdetailsPage);
  }
}
