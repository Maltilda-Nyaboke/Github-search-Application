import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  accessToken: string = environment.accessToken;
  githubUser = 'Maltilda-Nyaboke';
  user_url: string = `https://api.github.com/users/`
  // repo_url:string =`https://api.github.com/users/`
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get<any>(this.user_url + this.githubUser)
  }
  getRepos(): Observable<any> {
    return this.http.get<any>(this.user_url + this.githubUser + '/repos')
  }
  updateUser(username: string) {
    this.githubUser = username;
  }
  // updateRepos(userRepos:string){
  //     this.
  // }
}
