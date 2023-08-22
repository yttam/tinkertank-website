import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayCampsPage } from './holiday-camps.page';

const routes: Routes = [
  {
    path: '',
    component: HolidayCampsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayCampsPageRoutingModule { }
