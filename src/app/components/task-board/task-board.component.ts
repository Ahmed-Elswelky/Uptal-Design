import { Component } from '@angular/core';
import { TaskColumnComponent } from "../task-column/task-column.component";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [TaskColumnComponent],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent {
  applied = [
    {
      name: "Ahmed Ali",
      city: "Cairo",
      phone: "+20 1012345678",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      gpa: 3.8
    },
    {
      name: "Sara Mohamed",
      city: "Alexandria",
      phone: "+20 1023456789",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      gpa: 3.6
    },
    {
      name: "Omar Hassan",
      city: "Giza",
      phone: "+20 1034567890",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      gpa: 3.9
    }
  ];
  
  shortlisted = [
    {
      name: "Ahmed Ali",
      city: "Cairo",
      phone: "+20 1012345678",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      gpa: 3.8
    },
    {
      name: "Sara Mohamed",
      city: "Alexandria",
      phone: "+20 1023456789",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      gpa: 3.6
    },
    {
      name: "Omar Hassan",
      city: "Giza",
      phone: "+20 1034567890",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      gpa: 3.9
    }
  ];
  interview = [
    {
      name: "Ahmed Ali",
      city: "Cairo",
      phone: "+20 1012345678",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      gpa: 3.8
    },
    {
      name: "Sara Mohamed",
      city: "Alexandria",
      phone: "+20 1023456789",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      gpa: 3.6
    },
    {
      name: "Omar Hassan",
      city: "Giza",
      phone: "+20 1034567890",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      gpa: 3.9
    }
  ];

  connectedLists = ['applied', 'shortlisted', 'interview'];

}
