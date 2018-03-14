import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  image: any;
  comments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider :MediaProvider) {
    this.image = navParams.get('image');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
    this.mediaProvider.fetchComments(this.image.file_id).subscribe(res => this.comments = res);
  }

}
