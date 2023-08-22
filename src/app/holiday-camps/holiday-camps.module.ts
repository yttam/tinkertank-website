import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HolidayCampsPage } from './holiday-camps.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HolidayCampsPageRoutingModule } from './holiday-camps-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HolidayCampsPageRoutingModule
  ],
  declarations: [HolidayCampsPage]
})
export class HolidayCampsPageModule { }
