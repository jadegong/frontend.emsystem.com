import {DashboardComponent} from "./dashboard";
import {AccountComponent} from './account';
import {ModuleComponent} from "./module.component";
import {Routes} from "@angular/router";
import {AuthGuard} from "../components/services/auth-guard.service";

export const ModuleRoutes: Routes = [
  {
    path: 'module', component: ModuleComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'account', component: AccountComponent},
    ]
  }
];
