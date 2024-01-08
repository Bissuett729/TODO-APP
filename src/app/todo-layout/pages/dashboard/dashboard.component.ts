import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public cards_dashboards: cards[] = [
    {
      title: 'To do',
      quantity: 5,
      link: '/TODO/board',
      icon: 'ri-todo-line',
    },
    {
      title: 'In progress',
      quantity: 3,
      link: '/TODO/board',
      icon: 'ri-calendar-todo-line',
    },
    {
      title: 'Done',
      quantity: 1,
      link: '/TODO/board',
      icon: 'ri-task-line',
    },
  ];
}

export type cards = {
  title: string;
  quantity: number;
  link: string;
  icon: string;
};
