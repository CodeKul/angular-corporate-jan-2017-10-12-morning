import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open')
  isOpen:  boolean;

  @HostListener('mouseenter')
  enter(){
    this.isOpen = true;
  }

  @HostListener('mouseleave')
  leave() {
    this.isOpen = false;
  }

  constructor() { }
}
