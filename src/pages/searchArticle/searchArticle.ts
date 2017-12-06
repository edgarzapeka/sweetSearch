import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-search-article',
  templateUrl: 'searchArticle.html',
  providers: [InAppBrowser]
})
export class SearchArticle {
  items: string[];

    constructor(public navCtrl: NavController, private http: HttpClient, private iab: InAppBrowser) {

    }

    getItems(event){
      this.http.get(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${event.target.value}&api-key=2294d376416c4eeea8a6ca0f988b4371`)
      .subscribe(data => {
          this.items = data['response'].docs;
          console.log(data)
      });
    }

    openBrowser(urlString){
      this.iab.create(urlString);
     //browser.close();
    }
}
