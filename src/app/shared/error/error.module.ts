import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ ErrorComponent ],
    exports: [ ErrorComponent ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class ErrorModule {
}
