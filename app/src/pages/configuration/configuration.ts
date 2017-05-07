import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { PredictGarden } from '../predict-garden/predict-garden';

/**
 * Generated class for the Configuration page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
})
export class Configuration {
  @ViewChild(Slides) slides: Slides;

  predictGarden = PredictGarden;

  numberOfBeacons: number = 0;

  incrementNumberOfBeacons() {
  this.numberOfBeacons++;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Configuration');
  }
  
  nextSlide() {
    this.slides.slideNext();
  }


}
