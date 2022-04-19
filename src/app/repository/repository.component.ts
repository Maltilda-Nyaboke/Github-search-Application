import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { ApiService } from '../api.service';
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  userRepos!: any;
  constructor(private UserService: ApiService) { }

  ngOnInit(): void {
    this.UserService.getRepos().subscribe(
      data => {
        this.userRepos = data;
        console.log(this.userRepos);
      }
    )
  }

}
