import { Directive, ElementRef, Renderer, HostListener, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[codeResizer]'
})
export class CodeResizerDirective implements OnChanges{

  @HostBinding('style.width') 
  widthBox : string;

  @HostListener('mouseenter') 
  mousein(){
    //this.rend.setElementStyle(this.elRef.nativeElement, 'width', '300px');
    this.widthBox = '300px';
  }

  @HostListener('mouseleave')
  mouseout() {
    //this.rend.setElementStyle(this.elRef.nativeElement, 'width', '200px');
    this.widthBox = '200px';
  }

  constructor(
    private elRef: ElementRef,
    private rend: Renderer
  ) {
    //this.elRef.nativeElement.style.width='200px';

    // this.rend.setElementStyle(this.elRef.nativeElement, 'width', '200px');
   // this.rend.setElementStyle(this.elRef.nativeElement, 'width', this.widthBox);
  }

  ngOnChanges() {
    //this.rend.setElementStyle(this.elRef.nativeElement, 'width', this.widthBox + 'px');
  }
}
