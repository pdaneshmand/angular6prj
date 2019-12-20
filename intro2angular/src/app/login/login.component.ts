import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { reducers } from "../store/reducers";
import { ACTION_LOGIN } from "../store/actions/appActions";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private Auth: AuthService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit() {}

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;
    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        //redirect the person to /admin
        this.router.navigate(["dashboard"]);
        this.Auth.setLoggedIn(true);
        this.store.dispatch({ type: ACTION_LOGIN });
      } else {
        window.alert(data.message);
        this.router.navigate(["admin"]);
        this.Auth.setLoggedIn(true);
      }
    });
  }
}
