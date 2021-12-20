import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { IosInstallComponent } from './ios-install/ios-install.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [ HeaderComponent, IosInstallComponent, FooterComponent ],
    exports: [ HeaderComponent, IosInstallComponent, FooterComponent ],
    entryComponents: [ IosInstallComponent ],
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
