import { Component } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'parents';
	constructor(private loginService: UserService) {}
	login() {
		// debugger;
		this.loginService.userLogin().subscribe((data) => {
			debugger;
		});
	}
}
