import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { IonicStorageModule } from '@ionic/storage';


import { MyArticles } from '../pages/my_articles/my_articles'
import { MyImages } from '../pages/my_images/my_images';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { SearchArticle } from '../pages/searchArticle/searchArticle';
import { SearchImage } from '../pages/searchImage/searchImage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyArticles,
    MyImages,
    HomePage,
    TabsPage,
    SearchPage,
    SearchArticle,
    SearchImage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyArticles,
    MyImages,
    HomePage,
    TabsPage,
    SearchPage,
    SearchArticle,
    SearchImage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
