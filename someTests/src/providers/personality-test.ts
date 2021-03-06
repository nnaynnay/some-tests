import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PaersonalityTest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PersonalityTestProvider {

    private questions = [
        {
            "question": "Am the life of the party.",
            "score": 0
        },
        {
            "question": "Feel little concern for others.",
            "score": 0
        },
        {
            "question": "Am always prepared.",
            "score": 0
        },
        {
            "question": "Get stressed out easily.",
            "score": 0
        },
        {
            "question": "Have a rich vocabulary.",
            "score": 0
        },
        {
            "question": "Don't talk a lot.",
            "score": 0
        },
        {
            "question": "Am interested in people.",
            "score": 0
        },
        {
            "question": "Leave my belongings around.",
            "score": 0
        },
        {
            "question": "Am relaxed most of the time.",
            "score": 0
        },
        {
            "question": "Have difficulty understanding abstract ideas.",
            "score": 0
        },
        {
            "question": "Feel comfortable around people.",
            "score": 0
        },
        {
            "question": "Insult people.",
            "score": 0
        },
        {
            "question": "Pay attention to details.",
            "score": 0
        },
        {
            "question": "Worry about things.",
            "score": 0
        },
        {
            "question": "Have a vivid imagination.",
            "score": 0
        },
        {
            "question": "Keep in the background.",
            "score": 0
        },
        {
            "question": "Sympathize with others' feelings.",
            "score": 0
        },
        {
            "question": "Make a mess of things.",
            "score": 0
        },
        {
            "question": "Seldom feel blue.",
            "score": 0
        },
        {
            "question": "Am not interested in abstract ideas.",
            "score": 0
        },
        {
            "question": "Start conversations.",
            "score": 0
        },
        {
            "question": "Am not interested in other people's problems.",
            "score": 0
        },
        {
            "question": "Get chores done right away.",
            "score": 0
        },
        {
            "question": "Am easily disturbed.",
            "score": 0
        },
        {
            "question": "Have excellent ideas.",
            "score": 0
        },
        {
            "question": "Have little to say.",
            "score": 0
        },
        {
            "question": "Have a soft heart.",
            "score": 0
        },
        {
            "question": "Often forget to put things back in their proper place.",
            "score": 0
        },
        {
            "question": "Get upset easily.",
            "score": 0
        },
        {
            "question": "Do not have a good imagination.",
            "score": 0
        },
        {
            "question": "Talk to a lot of different people at parties.",
            "score": 0
        },
        {
            "question": "Am not really interested in others.",
            "score": 0
        },
        {
            "question": "Like order.",
            "score": 0
        },
        {
            "question": "Change my mood a lot.",
            "score": 0
        },
        {
            "question": "Am quick to understand things.",
            "score": 0
        },
        {
            "question": "Don't like to draw attention to myself.",
            "score": 0
        },
        {
            "question": "Take time out for others.",
            "score": 0
        },
        {
            "question": "Shirk my duties.",
            "score": 0
        },
        {
            "question": "Have frequent mood swings.",
            "score": 0
        },
        {
            "question": "Use difficult words.",
            "score": 0
        },
        {
            "question": "Don't mind being the center of attention.",
            "score": 0
        },
        {
            "question": "Feel others' emotions.",
            "score": 0
        },
        {
            "question": "Follow a schedule.",
            "score": 0
        },
        {
            "question": "Get irritated easily.",
            "score": 0
        },
        {
            "question": "Spend time reflecting on things.",
            "score": 0
        },
        {
            "question": "Am quiet around strangers.",
            "score": 0
        },
        {
            "question": "Make people feel at ease.",
            "score": 0
        },
        {
            "question": "Am exacting in my work.",
            "score": 0
        },
        {
            "question": "Often feel blue.",
            "score": 0
        },
        {
            "question": "Am full of ideas.",
            "score": 0
        }
    ];

    public scoreCategories = [
        {
            id: 'o',
            baseScore: 8,
            plusQuestions: [5, 15, 25, 35, 40, 45, 50],
            minusQuestions: [10, 20, 30],
            range: {
                low: { min: 0, max: 3 },
                average: { min: 4, max: 5 },
                high: { min: 6, max: 999 }
            },
            subTotalScore: null,
            subTotalRange: ''
        },
        {
            id: 'c',
            baseScore: 14,
            plusQuestions: [3, 13, 23, 33, 43, 48],
            minusQuestions: [8, 18, 28, 38],
            range: {
                low: { min: 0, max: 2 },
                average: { min: 3, max: 4 },
                high: { min: 5, max: 999 }
            },
            subTotalScore: null,
            subTotalRange: ''
        },
        {
            id: 'e',
            baseScore: 20,
            plusQuestions: [1, 11, 21, 31, 41],
            minusQuestions: [6, 16, 26, 36, 46],
            range: {
                low: { min: 0, max: 2 },
                average: { min: 3, max: 3 },
                high: { min: 4, max: 999 }
            },
            subTotalScore: null,
            subTotalRange: ''
        },
        {
            id: 'a',
            baseScore: 14,
            plusQuestions: [7, 17, 27, 37, 42, 47],
            minusQuestions: [2, 12, 22, 32],
            range: {
                low: { min: 0, max: 3 },
                average: { min: 4, max: 4 },
                high: { min: 5, max: 999 }
            },
            subTotalScore: null,
            subTotalRange: ''
        },
        {
            id: 'n',
            baseScore: 38,
            plusQuestions: [9, 19],
            minusQuestions: [4, 14, 24, 29, 34, 39, 44, 49],
            range: {
                low: { min: 0, max: 2 },
                average: { min: 3, max: 3 },
                high: { min: 4, max: 999 }
            },
            subTotalScore: null,
            subTotalRange: ''
        }
    ];

    public categoryDetail = [
        {
            id: 'o',
            name: 'Openness to Experience (O)',
            description: 'is the personality trait of seeking new experience and intellectual pursuits. High scorers tend to be more imaginative and full of ideas. Low scorers are more down to earth. '
        },
        {
            id: 'c',
            name: 'Conscientiousness (C)',
            description: 'is the personality trait of being honest and hardworking. High scorers have a high attention to detail and prefer routines. Low scorers tend to evaluate situations in shades of grey than in black or white.'
        },
        {
            id: 'e',
            name: 'Extroversion (E)',
            description: 'is the personality trait of seeking fulfillment from sources outside the self or in community. High scorers tend to be more social. Low scorers prefer to work on their projects alone. '
        },
        {
            id: 'a',
            name: 'Agreeableness (A)',
            description: 'reflects how much individuals adjust their behavior to suit others. High scorers are typically polite and peace loving. Low scorers tend to be more direct and straightforward. '
        },
        {
            id: 'n',
            name: 'Neuroticism (N)',
            description: 'is the personality trait of being emotional. High scorers tend to react ngatively to stress points. Low scorers tend to repond more logically in stressful situations.'
        }
    ];

    constructor() {
        console.log('Hello PaersonalityTest Provider');
    }

    getQuestions() {
        return this.questions;
    }

    getScore(questions = []) {
        return this.scoreCategories.map((scoreCategory) => {
            scoreCategory.subTotalScore = scoreCategory.baseScore;
            scoreCategory.plusQuestions.forEach((q) => {
                scoreCategory.subTotalScore += questions[q - 1].score;
            });
            scoreCategory.minusQuestions.forEach((q) => {
                scoreCategory.subTotalScore -= questions[q - 1].score;
            });
            Object.keys(scoreCategory.range).forEach((rangeKey) => {
                let range = scoreCategory.range[rangeKey];
                if (scoreCategory.subTotalScore >= range.min && scoreCategory.subTotalScore <= range.max) {
                    scoreCategory.subTotalRange = rangeKey;
                }
            });
            return {
                id: scoreCategory.id,
                subTotalScore: scoreCategory.subTotalScore,
                subTotalRange: scoreCategory.subTotalRange
            };
        });
    }

    getCategoryDetail(id: string) {
        return this.categoryDetail.find(c => c.id === id);
    }

    getRangeKeyIndex(rangeKey: string) {
        switch (rangeKey) {
            case 'high':
                return 3;
            case 'average':
                return 2;
            case 'low':
                return 1;
        }
    }
}
