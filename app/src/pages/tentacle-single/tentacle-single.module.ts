import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TentacleSingle } from './tentacle-single';

@NgModule({
  declarations: [
    TentacleSingle,
  ],
  imports: [
    IonicPageModule.forChild(TentacleSingle),
  ],
  exports: [
    TentacleSingle
  ]
})
export class TentacleSingleModule {}
