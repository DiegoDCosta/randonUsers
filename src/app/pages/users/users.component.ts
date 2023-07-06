import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  openConfirmationDialog(name: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { name: name }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.users = this.users.filter(user => user.id.name !== name);
      }
    });
  }

}
