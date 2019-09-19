import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/admin/user/services/user.service';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

}
