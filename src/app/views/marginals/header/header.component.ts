import { CategoryModel } from "./../../../shared/models/category.model";
import { CategoriesService } from "./../../../shared/services/categories.service";
import { Component, OnInit } from "@angular/core";
import { take } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  categories: Observable<CategoryModel[]>;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService.getCategories();
    this.categories = this.categoriesService.categories;
  }
  trackByFn(index, category) {
    return category.id;
  }
}
