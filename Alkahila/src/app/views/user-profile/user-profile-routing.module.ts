import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewAddressComponent } from "./new-address/new-address.component";

const routes: Routes = [
  { path: "new-address", component: NewAddressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {}
