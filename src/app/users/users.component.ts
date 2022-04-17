import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user:any;
userRepos:any;
  constructor(private UserService: ApiService) { }

  ngOnInit(): void {
  this.UserService.getUsers().subscribe(
    data => {this.user =data;
      console.log(this.user);
    }
  )
  this.UserService.getRepos().subscribe(
    data => {this.userRepos=data;
      console.log(this.userRepos);
    }
  )
  }

}
