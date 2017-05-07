import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TentacleService } from '../../providers/tentacle-service';

/**
 * Generated class for the HttpTest page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-http-test',
  templateUrl: 'http-test.html',
  providers: [TentacleService]
})
export class HttpTest {

  public foundRepos;
  public username;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tentacles: TentacleService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HttpTest');
  }

  getRepos() {
    this.tentacles.getRepos('fa-m').subscribe(
        data => {
          this.foundRepos = data.json();
        },
        err => console.error(err),
        () => console.log('getRepos completed')
    );
  }

}
