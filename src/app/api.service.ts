import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
 User ='Maltilda-Nyaboke';
  github_url:string =`https://api.github.com/users/${this.User}`
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    return this.http.get<any>(this.github_url)
  } 

}
