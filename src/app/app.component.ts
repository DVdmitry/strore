import { Component } from '@angular/core';
import {Photo} from "./shared/interface/photo.interface";
import {CdkDragDrop, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos: Photo[] = [
    {
      title: 'photo1',
      id: '1231'
    },
    {
      title: 'photo2',
      id: '1234'
    },
    {
      title: 'photo3',
      id: '1235'
    },
    {
      title: 'photo4',
      id: '1236'
    },
    {
      title: 'photo5',
      id: '1237'
    },
  ]

  drop(event: CdkDragDrop<Photo[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }
}
