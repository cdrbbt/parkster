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

  postComment(comment) {
    if (comment){
    this.mediaProvider.postComment(this.image.file_id, comment).subscribe(res => this.getComments());
    console.log(comment);
    }
  }

  getComments() {
    this.mediaProvider.fetchComments(this.image.file_id).subscribe(res => {
      this.comments = res;
      console.log(this.comments);
      this.comments.forEach((value, index) => {
        this.comments[index].username = this.getUserName(value.user_id);
        console.log(this.comments[index].username);
      });
    });
    console.log("test");

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider) {
    this.image = navParams.get('image');
  }

  getUserName(user_id) {
    let userName: String;
    this.mediaProvider.getUser(user_id).subscribe((res: any) => { userName = res.username; console.log(userName); return userName });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
    this.getComments();
  }
}
