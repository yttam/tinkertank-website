import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BirthdayPartiesPage } from './birthday-parties.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BirthdayPartiesPageRoutingModule } from './birthday-parties-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BirthdayPartiesPageRoutingModule
  ],
  declarations: [BirthdayPartiesPage]
})
export class BirthdayPartiesPageModule { }
