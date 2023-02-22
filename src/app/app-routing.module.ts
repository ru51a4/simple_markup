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