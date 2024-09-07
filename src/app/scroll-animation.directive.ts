import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {
  @Input() animationClass: string = 'fade-up';
  @Input() animationDelay: string = '0s';
  @Input() animationStartHeight: string = '0.65';
  private isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  ngOnInit() {
    this.setDelay();
    this.checkVisibility();
  }

  private setDelay() {
    console.warn(this.animationDelay)
    this.renderer.setStyle(this.el.nativeElement, 'transition-delay', this.animationDelay);
  }

  private checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const topShown = rect.top > 0 && rect.top < window.innerHeight * parseFloat(this.animationStartHeight);

    if (topShown && !this.isVisible)
    {
      this.isVisible = true;
      this.renderer.addClass(this.el.nativeElement, this.animationClass);
    }
  }

}
