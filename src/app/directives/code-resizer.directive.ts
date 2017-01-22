import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[codeResizer]'
})
export class CodeResizerDirective {

  constructor(
    private elRef: ElementRef,
    private rend: Renderer
  ) {
    //this.elRef.nativeElement.style.width='200px';

    this.rend.setElementStyle(this.elRef.nativeElement, 'width', '300px');
  }
}
