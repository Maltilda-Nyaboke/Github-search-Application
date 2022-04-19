import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  {path: 'home', component: UsersComponent},
  {path: 'repos', component: RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
