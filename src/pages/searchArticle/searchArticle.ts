import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { Article } from '../../app/data/Article';

@Component({
  selector: 'page-search-article',
  templateUrl: 'searchArticle.html',
  providers: [InAppBrowser]
})
export class SearchArticle {
  items: string[];

    constructor(public navCtrl: NavController, private http: HttpClient, private iab: InAppBrowser, private storage: Storage) {

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
    }

    saveArticle(object){
      this.storage.get('articles').then(value => {
        value.push(new Article(object._id, object.headline.main, object.snippet, object.web_url, "New York Times" ));
        this.storage.set('articles', value);
    }).catch(e => {
        var articles = [];
        articles.push(new Article(object._id, object.headline.main, object.snippet, object.web_url, "New York Times" ));
        this.storage.set('articles', articles);
    });
    }
}
