import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicComponentDirective} from "../../../../shared/directives/dynamic-component.directive";

@Component({
  selector: 'app-current-state',
  templateUrl: './current-state.component.html',
  styleUrls: ['./current-state.component.scss']
})
export class CurrentStateComponent implements OnInit {
  @ViewChild(DynamicComponentDirective) closeFormHost: DynamicComponentDirective | undefined

  constructor() { }

  ngOnInit(): void {
  }

  showDynamicComponent() {
  }

}
