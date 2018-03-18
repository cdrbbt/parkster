import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  image: File;
  formData: FormData;


  test(event){
    this.image = event.srcElement.files[0];
    console.log(this.image);
    this.formData = new FormData;
    this.formData.append('file', this.image);
    this.formData.append('title', this.image.name);
    this.media.uploadMedia(this.formData).subscribe(res => console.log(res));
    
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public media: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

}
