import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  message: string;
  btnClick: boolean = false; 

  register(login,password,email){
    console.log('test');
    console.log(login + password);
    this.authenticationProvider.register(login,password,email).
    subscribe(response => {
      console.log(response);
      this.message = 'Account created, go back to login screen';
      this.btnClick = true;
    },
    error => {
      console.log(error.error.error);
      this.message = error.error.error;
      this.btnClick = true;
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private authenticationProvider: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
