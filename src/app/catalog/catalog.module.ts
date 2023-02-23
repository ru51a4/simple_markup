import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "../card/card.component";
import { SharedModule } from "../shared/shared.module";
import { CatalogRoutingModule } from "./catalog-routing.module";
import { CatalogComponent } from "./catalog.component";

@NgModule({
    declarations: [CatalogComponent],
    imports: [
        CommonModule,
        CatalogRoutingModule,
        SharedModule,
    ]
})
  export class CatalogModule {
  } 