import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdayPartiesPage } from './birthday-parties.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdayPartiesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirthdayPartiesPageRoutingModule { }
