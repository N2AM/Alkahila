import { NgtUniversalModule } from "@ng-toolkit/universal";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./views/auth/auth.module";
import { HomeComponent } from "./views/home/home.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
import { UserProfileModule } from "./views/user-profile/user-profile.module";
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    UserProfileModule
  ],
  providers: []
})
export class AppModule {}
