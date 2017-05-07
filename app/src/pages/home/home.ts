import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { TentacleService } from '../../providers/tentacle-service';
import {HivesService} from "../../providers/hive-service";

import {TentacleSingle} from "../tentacle-single/tentacle-single";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TentacleService, HivesService]
})
export class HomePage {

  public foundTentacles;
  public foundHives;

  tentacleSingle = TentacleSingle;

  constructor(public navCtrl: NavController, private tentacles: TentacleService, private hives: HivesService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HttpTest');
    this.getTentacles();
    this.getHives();

    console.log(this.foundHives);
  }


  getTentacles() {
    this.tentacles.getTentacles().subscribe(
        data => {
          this.foundTentacles = data.json();
        },
        err => console.error(err),
        () => console.log('Tentacles completed')
    );
  }


  getHives() {
    this.hives.getHives().subscribe(
        data => {
          this.foundHives = data.json();
        },
        err => console.error(err),
        () => console.log('Hives completed')
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
