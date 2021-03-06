import { CategoriesComponent } from "./categories/categories.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category/category.component";

const routes: Routes = [
  { path: "", component: CategoriesComponent },
  { path: ":id", component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
