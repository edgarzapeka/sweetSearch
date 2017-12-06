import { Component } from '@angular/core';

import { MyArticles } from '../my_articles/my_articles';
import { MyImages } from '../my_images/my_images';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyArticles;
  tab3Root = MyImages;
  tab4Root = SearchPage;

  constructor() {

  }
}
