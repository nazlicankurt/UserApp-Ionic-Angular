import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContentPage } from './main-content.page';
import { UserDetailPage } from './user-detail/user-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MainContentPage
  },
  {
    path: 'user-detail',
    loadChildren: () => import('./user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContentPageRoutingModule {}
