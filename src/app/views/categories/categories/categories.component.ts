import { CategoryModel } from './../../../shared/models/category.model';
import { CategoriesService } from "./../../../shared/services/categories.service";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { take } from "rxjs/operators";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.sass"]
})
export class CategoriesComponent implements OnInit {
  categories: Observable<CategoryModel[]>;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories = this.categoriesService.categories;
  }
  trackByFn(index, category) {
    return category.id;
  }
}
