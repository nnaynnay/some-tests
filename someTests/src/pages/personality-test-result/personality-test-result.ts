import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PersonalityTestResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personality-test-result',
  templateUrl: 'personality-test-result.html'
})
export class PersonalityTestResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('score'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalityTestResultPage');
  }

}
