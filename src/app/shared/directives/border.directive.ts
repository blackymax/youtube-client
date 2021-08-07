import {
  Directive, ElementRef, Input, OnInit
} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit {
  @Input() date: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const currentTime = new Date();
    const releaseTime = new Date(this.date);
    const days = (currentTime.getTime() - releaseTime.getTime()) / (24 * 3600 * 1000);
    if (days > 180) {
      this.el.nativeElement.style.borderBottom = '5px solid red';
      return;
    } if (days < 30) {
      this.el.nativeElement.style.borderBottom = '5px solid green';
      return;
    }
    if (days < 7) {
      this.el.nativeElement.style.borderBottom = '5px solid blue';
      return;
    }
    this.el.nativeElement.style.borderBottom = '5px solid yellow';
  }
}
