import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Camera} from "@ionic-native/camera";
import {AlertController} from "ionic-angular";

/*
  Generated class for the CommonMediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonMediaProvider {

  constructor(public http: Http , public camera : Camera ,
              public alertCtrl : AlertController) {
    console.log('Hello CommonMediaProvider Provider');
  }
  galleryOrCamera() : Promise<any> {
    let promise = new Promise((resolve, reject )=> {
      let confirm = this.alertCtrl.create({
        title:  'Choose method',
        message: 'Choose picture from gallery or camera ?',
        buttons: [
          {
            text: 'Gallery',
            handler: () => {
              this.pickPicture().then((imageData)=>resolve(imageData)).catch((err) => reject(err));
            }
          },
          {
            text: 'Camera',
            handler: () => {
              this.takePicture().then((imageData)=>resolve(imageData)).catch((err) => reject(err));
            }
          }
        ]
      });
      confirm.present();
    });
    return promise ;

  }
  pickPicture() :Promise<any>{
    //noinspection TypeScriptUnresolvedVariable
    let promise = new Promise((resolve, reject )=> {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        targetWidth: 1000,
        targetHeight: 1000
      }).then((imageData) => {
        // imageData is a base64 encoded string
        resolve(imageData);
      }, (err) => reject(err));
    });
    return promise ;
  }
  takePicture() :Promise<any>{
    let promise = new Promise((resolve, reject )=>{
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        correctOrientation : true ,
      }).then((imageData) => {
        // imageData is a base64 encoded string
          resolve(imageData);
      }, (err) => reject(err));
    });
    return promise;

  }
}
