import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  @Input('offset') parallaxOffset: number = 1
  initialTop: number = 0

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.parallaxOffset;
    this.eleRef.nativeElement.style.top = this.initialTop;
    //this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    this.eleRef.nativeElement.style.top = this.parallaxOffset + (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }
}
