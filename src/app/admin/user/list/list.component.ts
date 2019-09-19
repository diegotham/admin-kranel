import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { UserItemDialogComponent } from 'src/app/admin/user/item-dialog/item-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'posts'];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    if (this.users) {
      this.dataSource.data = this.users;
      this.dataSource.sort = this.sort;
    }
  }

  filterData(q: string) {
    this.dataSource.filter = q.trim().toLocaleLowerCase();
  }

  openUser(user: User) {
    this.dialog.open(UserItemDialogComponent, {
      maxWidth: 'none',
      data: user
    });
  }
}
