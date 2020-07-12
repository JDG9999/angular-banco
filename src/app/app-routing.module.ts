import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CreditFormComponent } from './components/credit-form/credit-form.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { UsersComponent } from './components/users/users.component';
import { UserHistoryComponent } from './components/users/user-history/user-history.component';

const routes: Routes = [
  { path: 'inicio', component: IndexComponent },
  { path: 'solicitar-credito', component: CreditFormComponent },
  { path: 'solicitudes', component: ApplicationsComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'usuarios/:idUsuario', component: UserHistoryComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
