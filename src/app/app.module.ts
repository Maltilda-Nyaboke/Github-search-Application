import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ApiService } from './api.service';
import { RepositoryComponent } from './repository/repository.component';
import { FormsModule } from '@angular/forms';
import { PostPipe } from './post.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RepositoryComponent,
    PostPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
