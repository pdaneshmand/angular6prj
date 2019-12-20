import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  quote = "Loading your personal quote ";
  email = "Getting your email";
  constructor(private user: UserService, private router: Router) {}

  ngOnInit() {
    this.user.getAllState().subscribe(data => {
      console.log(data);
    });
    this.getUserQuote();
  }
  getUserQuote() {
    this.user.getData().subscribe(data => {
      if (data.status) {
        this.quote = data.quote;
        this.email = data.email;
        // if (!data.message) localStorage.removeItem("loggedIn");
      } else this.router.navigate(["logout"]);
    });
  }
  updateQuote(event) {
    const value = event.target.parentNode.querySelector("#myQuote").value;
    this.user.updateQuote(value).subscribe(data => {
      if (data.success) {
        alert("Your quote was updated");
        this.getUserQuote();
      } else {
        alert("Some paroblem");
      }
    });
  }
}
