import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MyImages } from '../my_images/my_images';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = MyImages;
  tab4Root = SearchPage;

  constructor() {

  }
}
