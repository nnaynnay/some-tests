import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CareerTestResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-career-test-result',
  templateUrl: 'career-test-result.html'
})
export class CareerTestResultPage {

  result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.result = this.navParams.get('result');
    this.navCtrl.remove(this.navCtrl.length() - 1, 1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CareerTestResultPage');
  }

}
