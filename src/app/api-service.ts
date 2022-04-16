
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user'




Injectable({
    providedIn: 'root'
})
export class ApiService {
    github_url:string ='https://api.github.com/'
constructor(private http:HttpClient){
 
  getUsers():Observable<User>{

  } 
  getRepos() {

  }
}
}
