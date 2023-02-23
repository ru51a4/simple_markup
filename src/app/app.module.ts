import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { CardComponent } from './card/card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SharedModule } from "./shared/shared.module";
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent, 
  ], 
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 