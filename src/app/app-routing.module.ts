import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [ 
      {
        path: 'index',
        loadChildren: () => import('./index/index.module').then(m => m.IndexModule),
      },
      {
        path: 'catalog',
        loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule),
      }, {
        path: 'detail',
        loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule),
      },
      {
        path: '**',
        loadChildren: () => import('./index/index.module').then(m => m.IndexModule),
      },]
  }];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }