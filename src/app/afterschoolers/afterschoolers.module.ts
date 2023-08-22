import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterSchoolersPage } from './afterschoolers.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AfterSchoolersPageRoutingModule } from './afterschoolers-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AfterSchoolersPageRoutingModule
  ],
  declarations: [AfterSchoolersPage]
})
export class AfterSchoolersPageModule { }
