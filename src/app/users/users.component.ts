import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: User[] =[]
  constructor(private UserService: ApiService) { }

  ngOnInit(): void {
  this.UserService.getUsers().subscribe(
    data => {this.users =data;
      console.log(data);}
  )
  }

}
