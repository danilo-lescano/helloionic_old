import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaceService } from '../../services/places.service';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placeService: PlaceService, private navCtrl: NavController) {

  }

  onAddPlace(value: {title: string}){
    this.placeService.addPlace(value);
    this.navCtrl.pop();
  }
}
