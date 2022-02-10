import {Directive, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: 'appDynamicComponent'
})

export class DynamicComponentDirective {
  constructor(private viewContainerRef: ViewContainerRef) {

  }
}
