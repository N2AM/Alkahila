import { CategoriesModule } from "./views/categories/categories.module";
import { AuthGuard } from "./shared/guards/auth.guard";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { UnAuthGuard } from "./shared/guards/unAuth.guard";
import { AuthModule } from "./views/auth/auth.module";
import { UserProfileModule } from "./views/user-profile/user-profile.module";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "",
    loadChildren: "./views/auth/auth.module#AuthModule",
    pathMatch: "prefix",
    canActivate: [UnAuthGuard]
  },
  {
    path: "",
    loadChildren: "./views/user-profile/user-profile.module#UserProfileModule",
    canActivate: [AuthGuard]
  },
  {
    path: "categories",
    loadChildren: "./views/categories/categories.module#Categories#Module"
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
