import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  greetMessage = "Hello Guest";
  logout = false;
  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.getAllState().subscribe(data => {
      console.log("DATA", data);
      if (data.login) {
        this.logout = true;
      }
    });
  }
}
