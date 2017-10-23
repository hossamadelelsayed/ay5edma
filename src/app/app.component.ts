import { WelcomelanguagePage } from './../pages/welcomelanguage/welcomelanguage';
import { WelcomePage } from './../pages/welcome/welcome';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import {MainService} from "../providers/main-service";
import { SplashScreen } from '@ionic-native/splash-screen';
import {TranslateService} from "@ngx-translate/core";

// import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public  MainService = MainService;
  rootPage:any = WelcomelanguagePage;
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public translate : TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

     platform.setDir('rtl', true);
     this.translate.setDefaultLang('ar');
  }

}

