import { NewAddressComponent } from "./new-address/new-address.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserProfileRoutingModule } from "./user-profile-routing.module";

@NgModule({
  declarations: [NewAddressComponent],
  imports: [CommonModule, UserProfileRoutingModule]
})
export class UserProfileModule {}
