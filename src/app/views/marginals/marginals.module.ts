import { CategoriesService } from "./../../shared/services/categories.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MarginalsRoutingModule } from "./marginals-routing.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MarginalsRoutingModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [CategoriesService]
})
export class MarginalsModule {}
