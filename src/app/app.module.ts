import { CategoriesModule } from "./views/categories/categories.module";
import { environment } from "./../environments/environment.prod";
import { NgtUniversalModule } from "@ng-toolkit/universal";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./views/auth/auth.module";
import { HomeComponent } from "./views/home/home.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
import { UserProfileModule } from "./views/user-profile/user-profile.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { MarginalsModule } from "./views/marginals/marginals.module";
import { DialogComponent } from "./views/dialog/dialog.component";
import { httpInterceptorProviders } from "./shared/interceptors";
import { Utilities } from "./shared/helpers/utilities";
import { MatDialogModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    CategoriesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AuthModule,
    AppRoutingModule,
    UserProfileModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    MarginalsModule,
    MatDialogModule
  ],
  providers: [httpInterceptorProviders, Utilities]
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
