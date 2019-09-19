import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/admin/user/services/user.service';

@Component({
  selector: 'app-user-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss']
})
export class UserItemDialogComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    public dialog: MatDialogRef<UserItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService
    ) {}

  ngOnInit() {
    this.user$ = this.userService.getUser(this.data.id);
  }

  close() {
    this.dialog.close();
  }
}
