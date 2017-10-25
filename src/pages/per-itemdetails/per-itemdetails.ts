import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {MainService} from "../../providers/main-service";

/**
 * Generated class for the PerItemdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-itemdetails',
  templateUrl: 'per-itemdetails.html',
})
export class PerItemdetailsPage {
  public catItems : any[] = [];
  public catID : number ;
  public mainService  = MainService ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public userService : UserProvider) {
    this.catID = this.navParams.data ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerItemdetailsPage');
    this.userService.getSalesByCat(this.catID).subscribe((res)=>{
      this.catItems = res ;
      console.log(res);
    });
  }

}
