import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { IosInstallComponent } from './ios-install/ios-install.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [ HeaderComponent, IosInstallComponent, FooterComponent ],
	exports: [ HeaderComponent, IosInstallComponent, FooterComponent ],
	entryComponents: [IosInstallComponent],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		MatToolbarModule,
		MatButtonModule,
		MatInputModule,
		MatIconModule,
		MatSnackBarModule
	]
})
export class LayoutModule {
}
