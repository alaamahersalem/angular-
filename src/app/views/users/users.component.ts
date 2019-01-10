import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {
	constructor(private usersService: UserService) {}
	users = [];
	ngOnInit() {
		this.usersService.getUsers().subscribe((data) => {
			this.users = data.data;
		});
	}
	deleteUser(id) {
		this.usersService.deleteUser(id).subscribe((data) => {
			debugger;
		});
	}
}
