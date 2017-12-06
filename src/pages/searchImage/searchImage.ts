import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Image } from '../../app/data/Image';

@Component({
  selector: 'page-search-image',
  templateUrl: 'searchImage.html'
})

export class SearchImage {
    items: string[];

    constructor(public navCtrl: NavController, private http: HttpClient, private storage: Storage) {

    }

    getItems(event){
        this.http.get(`https://api.unsplash.com/search/photos?page=1&query=${event.target.value}`, {
            headers: new HttpHeaders().set('Authorization', 'Client-ID c667e71fd86655ed0fb410c89c82d0158629ff482bf74936ef43ac36572a697a'),
        }).subscribe(data => {
            this.items = data['results'];
        });
    }

    saveImage(object){
        try{
            this.storage.get('images').then(value => {
            value.push(new Image(object.urls.small, object.user.name, "unsplash"));
            this.storage.set('images', value);
            });
        } catch(e){
            this.storage.set('images', []);
        }
    }
}
