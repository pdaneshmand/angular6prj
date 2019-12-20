import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appRedblack]"
})
export class RedblackDirective {
  element: ElementRef;
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "white";
    el.nativeElement.style.backgroundColor = "black";
    this.element = el;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.element.nativeElement.innerText += " - render by appRedBlack";
  }
}
