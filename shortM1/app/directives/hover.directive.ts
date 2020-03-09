import { Directive, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  @HostBinding('style.background') bg;
  @Input() appHover;
  @Input() hoverDefault;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    // this.bg = this.hoverDefault; 
    this.bg = this.appHover;
  }

  @HostListener('mouseEnter') onmouseenter(){
    // this.elementRef.nativeElement.style.background = "green";
    // this.bg = "green";
    this.bg = this.appHover;
  }

  @HostListener('mouseLeave') onmouseleave(){
    this.elementRef.nativeElement.style.background = "red";
  }
}
