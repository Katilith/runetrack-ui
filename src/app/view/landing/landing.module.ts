import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule
} from '@angular/material';

import { LoaderModule } from '../../shared/loader/loader.module';
import { LandingComponent } from './landing.component';


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
        LoaderModule
    ]
})
export class LandingModule {
}
