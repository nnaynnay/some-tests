import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CareerTestPage } from '../career-test/career-test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPage() {
    this.navCtrl.push(CareerTestPage, {}, {
      animate: true,
      direction: 'forward'
    })
  }

}
