import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { CommonModule } from '@angular/common';
import { CdkDropList, CdkDrag, CdkDragDrop, DragDropModule,  moveItemInArray,
  transferArrayItem, } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-task-column',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CommonModule, TaskCardComponent, DragDropModule],
  templateUrl: './task-column.component.html',
  styleUrl: './task-column.component.css'
})
export class TaskColumnComponent {
  @Input() title!: string;
  @Input() tasks!:any;
  @Input() columnId!: string;
  @Input() connectedLists: string[] = [];

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
