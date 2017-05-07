import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { TentacleService } from '../../providers/tentacle-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public foundRepos;
  public username;

  apiUrl = 'http://0.0.0.0:3000/api';
  tentaclesUrl = '/tentacles';
  data:any;

  constructor(public navCtrl: NavController) {

  }




}
