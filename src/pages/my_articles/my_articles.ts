import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Article } from '../../app/data/Article';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-my-articles',
  templateUrl: 'my_articles.html'
})
export class MyArticles implements OnInit{
  articles: Article[];

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  ngOnInit(){
    this.update();
  }


  update(){
      this.storage.get('articles').then((val) => {
        this.articles = val;
      }).catch(e => {
        this.storage.set('articles', []);
      });
  }

  delete(item){
    this.storage.get('articles').then(val => {
      this.storage.set('articles', val.filter(value => value.id != item.id))
    }).catch(e => {
      console.log(e);
    });
  }

}
