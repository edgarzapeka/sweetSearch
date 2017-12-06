import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Image } from '../../app/data/Image';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-my-images',
  templateUrl: 'my_images.html'
})
export class MyImages implements OnInit{
  images : Image[];

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  ngOnInit(){
    try{
      this.storage.get('images').then((val) => {
        this.images = val;
      });
    } catch(e){
      console.log('Error');
    }
  }

  delete(image){
  }
}
