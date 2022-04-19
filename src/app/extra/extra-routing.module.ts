import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { RepositoryComponent } from '../repository/repository.component';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [
  { path: 'Home', component: UsersComponent },
  { path: 'Repositories', component: RepositoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExtraRoutingModule { }
