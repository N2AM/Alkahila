import { CategoryModel } from "./../../shared/models/category.model";
import { Observable } from "rxjs";
import { CategoriesService } from "./../../shared/services/categories.service";
import { Component, OnInit } from "@angular/core";
import { take } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  categories: Observable<CategoryModel[]>;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories = this.categoriesService.categories;
  }
  trackByFn(index, category) {
    return category.id;
  }
}
