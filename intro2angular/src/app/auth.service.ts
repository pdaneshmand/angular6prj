import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

interface dataResponse {
  success: Boolean;
  message: String;
}

interface registerResponse {
  success: Boolean;
  message: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedInStatus = false;
  // private loggedInStatus = JSON.parse(
  //   localStorage.getItem("loggedIn") || "false"
  // );
  constructor(private http: HttpClient) {}

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    // localStorage.setItem("loggedIn", "true");
  }
  get isLoggedIn() {
    return this.loggedInStatus;
    // return JSON.parse(
    //   localStorage.getItem("loggedIn") || this.loggedInStatus.toString()
    // );
  }
  getUserDetails(email, password) {
    //post to api server
    return this.http.post<dataResponse>("/api/login", {
      email,
      password
    });
  }

  registerUser(email, password) {
    return this.http.post<registerResponse>("/api/register", {
      email,
      password
    });
  }
}
