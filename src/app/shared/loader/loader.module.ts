import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    declarations: [ LoaderComponent ],
    exports: [ LoaderComponent ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ]
})
export class LoaderModule {
}
