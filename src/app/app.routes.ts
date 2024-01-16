import { Routes } from '@angular/router';
import { TODOLAYOUTComponent } from './todo-layout/todo-layout.component';
import { BoardComponent } from './todo-layout/pages/board/board.component';
import { DashboardComponent } from './todo-layout/pages/dashboard/dashboard.component';
import { SettingsComponent } from './todo-layout/pages/settings/settings.component';

export const routes: Routes = [
    {path: '', redirectTo: 'TODO', pathMatch: 'full'},
    {path: 'TODO', component: TODOLAYOUTComponent, children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path:'dashboard', component: DashboardComponent},
        {path:'board', component: BoardComponent},
        {path:'settings', component: SettingsComponent},
    ]}
];
