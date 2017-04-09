import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { CareerTestPage } from '../pages/career-test/career-test';
import { CareerTestResultPage } from '../pages/career-test-result/career-test-result';
import { PersonalityTestPage } from '../pages/personality-test/personality-test';
import { PersonalityTestResultPage } from '../pages/personality-test-result/personality-test-result';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PersonalityTestProvider } from '../providers/personality-test';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    CareerTestPage,
    CareerTestResultPage,
    PersonalityTestPage,
    PersonalityTestResultPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'ios',
      locationStrategy: 'path'
    },
      {
        links: [
          // { component: CareerTestPage, name: 'CareerTest', segment: 'career-test' }
        ]
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    CareerTestPage,
    CareerTestResultPage,
    PersonalityTestPage,
    PersonalityTestResultPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PersonalityTestProvider
  ]
})
export class AppModule { }
