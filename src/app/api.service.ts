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
  github_url:string =`https://api.github.com/users/${this.user}`
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    return this.http.get<any>(this.github_url)
  } 

}
