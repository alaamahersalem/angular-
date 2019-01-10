import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: [ './user-details.component.css' ]
})
export class UserDetailsComponent implements OnInit {
	constructor(private route: ActivatedRoute, private usersService: UserService) {}

	ngOnInit() {
		var id;
		var user;
		this.route.params.subscribe((params) => (id = params.id));
		this.usersService.userDetails(id).subscribe((data) => {
			user = data.data;
		});
	}
}
