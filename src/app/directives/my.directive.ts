import { Directive, 
  TemplateRef, 
  ViewContainerRef,
  Input
 } from '@angular/core';

@Directive({
  selector: '[my]'
})
export class MyDirective {

  constructor(
    private tempRef : TemplateRef<any>,
    private vcRef : ViewContainerRef
  ) {
   }

  @Input() set myPizza(isPizza : boolean){
    console.log(this.tempRef);
    console.log(this.vcRef);
    
    if(isPizza) {
      this.vcRef.createEmbeddedView(this.tempRef);
    }
    else this.vcRef.clear();
  }
}
