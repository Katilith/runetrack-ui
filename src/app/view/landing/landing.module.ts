import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoaderModule } from '../../shared/loader/loader.module';
import { LandingComponent } from './landing.component';
import { LayoutModule } from '../../layout/layout.module';


@NgModule({
    declarations: [ LandingComponent ],
    exports: [ LandingComponent, MatSnackBarModule ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        LoaderModule,
        LayoutModule
    ]
})
export class LandingModule {
}
