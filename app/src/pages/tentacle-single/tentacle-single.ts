import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TentacleService } from '../../providers/tentacle-service';

/**
 * Generated class for the TentacleSingle page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tentacle-single',
  templateUrl: 'tentacle-single.html',
  providers: [TentacleService]
})
export class TentacleSingle {

	public foundTentacles;
	public currentTentacle;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tentacleService: TentacleService) {
  }

  ionViewDidLoad() {
    console.log('tentacle-single started');
    /*this.getTentacles();*/
    this.getTentacleById(1);
  }

    getTentacles() {
    this.tentacleService.getTentacles().subscribe(
        data => {
          this.foundTentacles = data.json();
        },
        err => console.error(err),
        () => console.log('Tentacles called from tentacle-single: completed')
    );
  }

  getTentacleById(id) {
    this.tentacleService.getTentacleById(id).subscribe(
        data => {
          this.currentTentacle = data.json();
        },
        err => console.error('Fehler :(' + err),
        () => console.log('Tentacle completed ' + id)
    );
  }

    showSoilState(currentState) {
    if(currentState > 0 && currentState < 0.3) {
      return 'star-outline';
    } else if(currentState > 0.3 && currentState < 0.6) {
      return 'star-half';
    } else {
      return 'star';
    }
  }

}
