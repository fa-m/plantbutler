import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpTest } from './http-test';

@NgModule({
  declarations: [
    HttpTest,
  ],
  imports: [
    IonicPageModule.forChild(HttpTest),
  ],
  exports: [
    HttpTest
  ]
})
export class HttpTestModule {}
