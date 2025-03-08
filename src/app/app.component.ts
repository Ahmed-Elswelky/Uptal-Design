import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskBoardComponent } from "./components/task-board/task-board.component";
import { TaskColumnComponent } from "./components/task-column/task-column.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskBoardComponent, TaskColumnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uptal-project';
}
