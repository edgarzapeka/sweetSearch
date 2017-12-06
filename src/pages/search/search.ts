import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchArticle } from '../searchArticle/searchArticle';
import { SearchImage } from '../searchImage/searchImage';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
    searchArticle = SearchArticle;
    searchImage = SearchImage;

    constructor(public navCtrl: NavController) {

    }
}
