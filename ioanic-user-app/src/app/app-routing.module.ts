import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-content',
    pathMatch: 'full'
  },
  { path: 'main-content',
  children: [
  {
    path: '',
    loadChildren: () => import('./main-content/main-content.module').then( m => m.MainContentPageModule)
  },
  {
    path: ':name',
    loadChildren: () => import('./main-content/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },

]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
