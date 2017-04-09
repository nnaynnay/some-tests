import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CareerTestResultPage } from '../career-test-result/career-test-result';

@Component({
  selector: 'page-career-test',
  templateUrl: 'career-test.html'
})
export class CareerTestPage {

    questions = [
        {
            "question": "Estimate the quality of parts before shipment ",
            "score": 0
        },
        {
            "question": "Study the structure of the human body ",
            "score": 0
        },
        {
            "question": "Conduct a musical choir ",
            "score": 0
        },
        {
            "question": "Give career guidance to people ",
            "score": 0
        },
        {
            "question": "Sell restaurant franchises to individuals ",
            "score": 0
        },
        {
            "question": "Generate the monthly payroll checks for an office ",
            "score": 0
        },
        {
            "question": "Lay brick or tile ",
            "score": 0
        },
        {
            "question": "Study animal behavior ",
            "score": 0
        },
        {
            "question": "Direct a play ",
            "score": 0
        },
        {
            "question": "Do volunteer work at a non-profit organization ",
            "score": 0
        },
        {
            "question": "Sell merchandise at a department store ",
            "score": 0
        },
        {
            "question": "Inventory supplies using a hand-held computer ",
            "score": 0
        },
        {
            "question": "Work on an offshore oil-drilling rig ",
            "score": 0
        },
        {
            "question": "Do research on plants or animals ",
            "score": 0
        },
        {
            "question": "Design artwork for magazines ",
            "score": 0
        },
        {
            "question": "Help people who have problems with drugs or alcohol ",
            "score": 0
        },
        {
            "question": "Manage the operations of a hotel ",
            "score": 0
        },
        {
            "question": "Use a computer program to generate customer bills ",
            "score": 0
        },
        {
            "question": "Assemble electronic parts ",
            "score": 0
        },
        {
            "question": "Develop a new medical treatment or procedure ",
            "score": 0
        },
        {
            "question": "Write a song ",
            "score": 0
        },
        {
            "question": "Teach an individual an exercise routine ",
            "score": 0
        },
        {
            "question": "Operate a beauty salon or barber shop ",
            "score": 0
        },
        {
            "question": "Maintain employee records ",
            "score": 0
        },
        {
            "question": "Operate a grinding machine in a factory ",
            "score": 0
        },
        {
            "question": "Conduct biological research ",
            "score": 0
        },
        {
            "question": "Write books or plays ",
            "score": 0
        },
        {
            "question": "Help people with family-related problems ",
            "score": 0
        },
        {
            "question": "Manage a department within a large company ",
            "score": 0
        },
        {
            "question": "Compute and record statistical and other numerical data ",
            "score": 0
        },
        {
            "question": "Fix a broken faucet ",
            "score": 0
        },
        {
            "question": "Study whales and other types of marine life ",
            "score": 0
        },
        {
            "question": "Play a musical instrument ",
            "score": 0
        },
        {
            "question": "Supervise the activities of children at a camp ",
            "score": 0
        },
        {
            "question": "Manage a clothing store ",
            "score": 0
        },
        {
            "question": "Operate a calculator ",
            "score": 0
        },
        {
            "question": "Assemble products in a factory ",
            "score": 0
        },
        {
            "question": "Work in a biology lab ",
            "score": 0
        },
        {
            "question": "Perform stunts for a movie or television show ",
            "score": 0
        },
        {
            "question": "Teach children how to read ",
            "score": 0
        },
        {
            "question": "Sell houses ",
            "score": 0
        },
        {
            "question": "Handle customers' bank transactions ",
            "score": 0
        },
        {
            "question": "Install flooring in houses ",
            "score": 0
        },
        {
            "question": "Make a map of the bottom of an ocean ",
            "score": 0
        },
        {
            "question": "Design sets for plays ",
            "score": 0
        },
        {
            "question": "Help elderly people with their daily activities ",
            "score": 0
        },
        {
            "question": "Run a toy store ",
            "score": 0
        },
        {
            "question": "Keep shipping and receiving records ",
            "score": 0
        }
    ];

  constructor(public navCtrl: NavController) {

  }

  submitTest() {

    let scoreGroup = this.questions.reduce((acc, item) => {
        acc[item.score] = acc[item.score] ? acc[item.score] + 1 : 1;
        return acc;
    }, {});

    let maxScore = 0;
    let maxScoreGroupId;
    Object.keys(scoreGroup).forEach((key) => {
        if (scoreGroup[key] > maxScore) {
            maxScore = scoreGroup[key];
            maxScoreGroupId = key;
        }
    });
    console.log(scoreGroup);
    this.navCtrl.push(CareerTestResultPage, {result: maxScoreGroupId});
  }

}
