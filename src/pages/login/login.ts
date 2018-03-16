import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  error: boolean;

  login(username: string, password: string){
    console.log('test');
    console.log(username + password);
    this.authenticationProvider.login(username,password).subscribe((response: any) =>{
      console.log(response);
      localStorage.setItem('token', response.token);
      console.log(localStorage.getItem('token'));
      this.error = false;
      this.navCtrl.push(TabsPage);
    } , error => {this.error = true});
  }



  constructor(public navCtrl: NavController, public navParams: NavParams, private authenticationProvider: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
