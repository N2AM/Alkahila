import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent],
  imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
