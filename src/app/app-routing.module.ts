import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren:() =>import('./list/list.module').then(m =>m.ListPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren:() =>import('./detail/detail.module').then(m => m.DetailPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () =>import('./edit/edit.module').then(m => m.EditPageModule)
  },
  {
    path: 'create',
    loadChildren: () =>import('./create/create.module').then(m=> m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
