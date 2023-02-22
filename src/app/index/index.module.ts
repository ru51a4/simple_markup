import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IndexRoutingModule } from "./index-routing.module";
import { IndexComponent } from "./index.component";

@NgModule({
    declarations: [IndexComponent],
    imports: [
      CommonModule,
      IndexRoutingModule,
      FormsModule,
    ]
  })
  export class IndexModule {
  } 