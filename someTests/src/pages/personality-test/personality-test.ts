import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PersonalityTestProvider } from '../../providers/personality-test';
import { PersonalityTestResultPage  } from '../../pages/personality-test-result/personality-test-result';

/*
  Generated class for the PersonalityTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  providers: [PersonalityTestProvider],
  selector: 'page-personality-test',
  templateUrl: 'personality-test.html'
})
export class PersonalityTestPage {

  questions = [];
  scoreCategories = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public personalityTestProvider: PersonalityTestProvider
  ) {
    this.questions = this.personalityTestProvider.getQuestions().map(
      (q) => {
        return {
          question: q.question,
          score: 0
        };
    });
    this.scoreCategories = this.personalityTestProvider.scoreCategories;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalityTestPage');
  }

  submitTest() {
    this.navCtrl.push(PersonalityTestResultPage, {
      score: this.personalityTestProvider.getScore(this.questions)
    })
  }

}
