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

  api:string = 'http://0.0.0.0:3000/api';

  constructor(public http: Http) {
    console.log('Hello TentacleService Provider');
  }

  getTentacles() {
    let tentacles = this.http.get(this.api + '/tentacles');

    return tentacles;
  }



}
