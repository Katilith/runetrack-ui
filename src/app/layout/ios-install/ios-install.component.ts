import { Component, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';

@Component({
	selector: 'rune-ios-install',
	templateUrl: './ios-install.component.html',
	styleUrls: [ './ios-install.component.scss' ]
})
export class IosInstallComponent implements OnInit {
	
	public constructor(private snackBarRef: MatSnackBarRef<IosInstallComponent>) {
	}
	
	public ngOnInit(): void {
	}
	
	public close(): void {
		this.snackBarRef.dismiss();
	}
	
}
