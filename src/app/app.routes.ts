import { Routes } from '@angular/router';
import { TODOLAYOUTComponent } from './todo-layout/todo-layout.component';
import { BoardComponent } from './todo-layout/pages/board/board.component';
import { DashboardComponent } from './todo-layout/pages/dashboard/dashboard.component';
import { SettingsComponent } from './todo-layout/pages/settings/settings.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {path: '', redirectTo: 'todo-app/login', pathMatch: 'full'},
    {path: 'todo-app/login', component: AuthComponent},
    {path: 'todo-app', component: TODOLAYOUTComponent, children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path:'dashboard', component: DashboardComponent},
        {path:'board', component: BoardComponent},
        {path:'settings', component: SettingsComponent},
    ]}
];
