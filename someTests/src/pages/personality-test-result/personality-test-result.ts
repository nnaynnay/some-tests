import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PersonalityTestProvider } from '../../providers/personality-test';
import { Chart } from 'chart.js';

/*
  Generated class for the PersonalityTestResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  providers: [PersonalityTestProvider],
  selector: 'page-personality-test-result',
  templateUrl: 'personality-test-result.html'
})
export class PersonalityTestResultPage {

  score: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public personalityTestProvider: PersonalityTestProvider
  ) {
    console.log(this.navParams.get('score'));
    this.score = this.navParams.get('score');
  }

  ionViewDidLoad() {
    let ctx = document.getElementById("resultChart");

    let data = {
      labels: this.score.map(
        s => (this.personalityTestProvider.getCategoryDetail(s.id)['id']).toUpperCase()
      ),
      datasets: [
        {
          borderColor: "rgba(0,0,0,1)",
          data: this.score.map(s =>
            this.personalityTestProvider.getRangeKeyIndex(s.subTotalRange)
          )
        }
      ]
    };
    let options = {
      legend: {
        display: false
      },
      scale: {
        type: "radialLinear",
        pointLabels: {
          fontSize: 20,
          fontColor: "#000"
        },
        ticks: {
          display: false,
          fontSize: 16,
          min: 1,
          max: 3,
          maxTicksLimit: 3,
          backdropPaddingY: 10,
          callback: function (value) {
            switch (value) {
              case 1:
                return 'low';
              case 2:
                return 'average';
              case 3:
                return 'high';
            }
          }
        }
      }
    };
    console.log(data)
    let myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: options
    });
    console.log('ionViewDidLoad PersonalityTestResultPage');
  }

}
