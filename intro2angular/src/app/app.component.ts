import { Component } from "@angular/core";
// import { HelloComponent } from "./hello/hello.component";
import { RecordsService } from "./records.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  records = [];
  constructor(private myFirstService: RecordsService) {}
  // text = "app";
  // formTitle = "Hello Form";
  // myVariable = "app";
  // myDisabledValue = false;
  // constructor() {
  //   setInterval(() => {
  //     this.myVariable = Math.random().toString();
  //     this.myDisabledValue = Math.random() > 0.5;
  //   }, 3000);
  // }
  // changeTitle() {
  //   this.formTitle = Math.random().toString();
  // }
  // title = "intro2angular";
  ngOnInit() {
    // this.myFirstService.getData().subscribe((data: []) => {
    //   this.records = data;
    // });
  }
}
