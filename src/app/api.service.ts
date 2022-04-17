import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  getUser() {
    throw new Error('Method not implemented.');
  }
 user ='Maltilda-Nyaboke';
  user_url:string =`https://api.github.com/users/${this.user}`
  repo_url:string =`https://api.github.com/users/${this.user}/repos`
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    return this.http.get<any>(this.user_url)
  } 
getRepos():Observable<any>{
  return this.http.get<any>(this.repo_url)
}
}
