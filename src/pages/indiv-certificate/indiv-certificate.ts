import { IndivViewcertificPage } from './../indiv-viewcertific/indiv-viewcertific';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndivCertificatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-certificate',
  templateUrl: 'indiv-certificate.html',
})
export class IndivCertificatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivCertificatePage');
  }
  gocertificate(){
    this.navCtrl.push(IndivViewcertificPage);
}
}
