import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-close-form',
  templateUrl: './close-form.component.html',
  styleUrls: ['./close-form.component.scss']
})
export class CloseFormComponent implements OnInit {
  @Input() title = 'Default title'
  @Output() close = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

  closeComponent() {
    this.close.emit()
  }

}
