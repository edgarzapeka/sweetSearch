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
    this.update();
  }

  update(){
      this.storage.get('images').then((val) => {
        this.images = val;
      }).catch(e => {
        this.storage.set('images', []);
      });

    }

  delete(image){
    this.storage.get('images').then(val => {
      this.storage.set('images', val.filter(value => value.url != image.url))
    }).catch(e => {
      console.log(e);
    });
  }
}
