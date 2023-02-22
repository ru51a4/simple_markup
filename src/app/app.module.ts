import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 