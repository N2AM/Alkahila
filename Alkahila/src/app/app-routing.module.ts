import { AuthGuard } from "./shared/guards/auth.guard";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { UnAuthGuard } from "src/app/shared/guards/unAuth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "",
    loadChildren: "./auth/auth.module.ts#AuthModule",
    pathMatch: "prefix",
    canActivate: [UnAuthGuard]
  },
  {
    path: "",
    loadChildren: "./user-profile/user-profile.module.ts#UserProfileModule",
    canActivate: [AuthGuard]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
