import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CareerTestPage } from '../career-test/career-test';
import { PersonalityTestPage } from '../personality-test/personality-test';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPage(page: string) {
    switch (page) {
      case 'personality-test':
        this.navCtrl.push(PersonalityTestPage, {}, {
          animate: true,
          direction: 'forward'
        });
        break;
      default:
      case 'career-test':
        this.navCtrl.push(CareerTestPage, {}, {
          animate: true,
          direction: 'forward'
        });
        break;

    }

  }

}
