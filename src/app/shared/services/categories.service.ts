import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { CategoryModel } from "../models/category.model";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  categories = new BehaviorSubject<CategoryModel[]>(null);
  constructor(private http: HttpClient) {}

  getCategories() {
    this.http
      .get<CategoryModel[]>(environment.apiUrl + "categories")
      .pipe(take(1))
      .subscribe((categories: CategoryModel[]) => {
        this.categories.next(categories);
      });
  }
}
