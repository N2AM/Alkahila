import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAuthenticated() {
    if (localStorage.getItem("TOKEN")) {
      return true;
    } else {
      return false;
    }
  }
}
