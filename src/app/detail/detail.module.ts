import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';
import { DetailRoutingModule } from './detail-routing.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
