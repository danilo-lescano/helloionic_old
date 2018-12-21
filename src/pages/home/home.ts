import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlaceService } from '../../services/places.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private places: {title: string}[] = [];

  constructor(public navCtrl: NavController, private placeService: PlaceService) {

  }
  ionViewWillEnter(){
    this.places = this.placeService.getPlaces();
  }
  renderNewPlace(){
    this.navCtrl.push(NewPlacePage);
  }
}
