
import {HttpClient} from '@angular/common/http'
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util'
import { Injectable } from '@angular/core'




Injectable({
    providedIn: 'root'
})
export class ApiService {
    github_url:string ='https://api.github.com/'
constructor(private http:HttpClient){
 
    
}
}
