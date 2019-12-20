import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // data = [
  //   {
  //     lang: "JavaScript",
  //     usedOn: "web"
  //   },
  //   {
  //     lang: "Swift",
  //     usedOn: "ios"
  //   }
  // ];
  // someRandomVariable = true;
  constructor() {
    // setInterval(() => {
    //   this.someRandomVariable = !this.someRandomVariable;
    // }, 1000);
  }
  // private actualAmountInUSD = 50;
  // INR = true;
  // get amount() {
  //   return this.INR ? this.actualAmountInUSD * 65 : this.actualAmountInUSD;
  // }
  // get format() {
  //   return this.INR ? "INR" : "USD";
  // }
  // toggleINRandUSD() {
  //   this.INR = !this.INR;
  // }
}
