import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { MatCardModule, MatIconModule } from '@angular/material';

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
