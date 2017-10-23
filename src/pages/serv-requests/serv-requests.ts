import { ServChatPage } from './../serv-chat/serv-chat';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-serv-requests',
  templateUrl: 'serv-requests.html',
})
export class ServRequestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServRequestsPage');
  }
  gochat(){
    this.navCtrl.push(ServChatPage);
  }
}
