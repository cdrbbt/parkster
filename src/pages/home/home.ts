import { CommentsPage } from './../comments/comments';
import { LoginPage } from './../login/login';
import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageData:any;

  ionViewDidLoad(){
    this.mediaProvider.fetchImages().subscribe(res => (this.imageData = res));
  }

move(image:any)
{this.navCtrl.push(CommentsPage, {image:image})}
  constructor(public navCtrl: NavController, private mediaProvider: MediaProvider) {

  }

}
