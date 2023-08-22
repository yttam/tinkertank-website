import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'afterschoolers', loadChildren: () => import('./afterschoolers/afterschoolers.module').then(m => m.AfterSchoolersPageModule) },
  { path: 'holiday-camps', loadChildren: () => import('./holiday-camps/holiday-camps.module').then(m => m.HolidayCampsPageModule) },
  { path: 'birthday-parties', loadChildren: () => import('./birthday-parties/birthday-parties.module').then(m => m.BirthdayPartiesPageModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
