import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterSchoolersPage } from './afterschoolers.page';

const routes: Routes = [
  {
    path: '',
    component: AfterSchoolersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterSchoolersPageRoutingModule { }
