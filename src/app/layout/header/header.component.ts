import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'rune-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

	public searchUsername: string = '';

	public constructor(private router: Router) {
	}

	public ngOnInit(): void {
	}
	
	public goHome(): void {
		this.router.navigate([ '/' ]);
	}

	public searchForUser(): void {
		const username = this.searchUsername.trim();

		if(username === '') {
			return;
		}

		this.router.navigate([ '/', username ]);
		this.searchUsername = '';
	}

}
