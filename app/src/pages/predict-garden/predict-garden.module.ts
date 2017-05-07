import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredictGarden } from './predict-garden';

@NgModule({
  declarations: [
    PredictGarden,
  ],
  imports: [
    IonicPageModule.forChild(PredictGarden),
  ],
  exports: [
    PredictGarden
  ]
})
export class PredictGardenModule {}
