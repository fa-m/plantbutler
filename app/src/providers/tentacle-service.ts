import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TentacleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TentacleService {

  constructor(public http: Http) {
    console.log('Hello TentacleService Provider');
  }

  getRepos(username) {
    let repos = this.http.get('https://api.github.com/users/'+username+'/repos');
    return repos;
  }

}
