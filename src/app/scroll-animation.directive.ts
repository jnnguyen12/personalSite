import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {
  @Input() animationClass: string = 'fade-up';
  private isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  ngOnInit() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const topShown = rect.top > 0 && rect.top < window.innerHeight * 0.65;

    console.log(topShown);

    if (topShown && !this.isVisible)
    {
      console.log("here");
      this.isVisible = true;
      this.renderer.addClass(this.el.nativeElement, this.animationClass);
    }
  }

}
