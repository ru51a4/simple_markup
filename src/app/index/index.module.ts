import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "../card/card.component";
import { SharedModule } from "../shared/shared.module";
import { IndexRoutingModule } from "./index-routing.module";
import { IndexComponent } from "./index.component";

@NgModule({
    declarations: [IndexComponent],
    imports: [
        CommonModule,
        IndexRoutingModule,
        FormsModule,
        SharedModule,
    ]
})
  export class IndexModule {
  } 