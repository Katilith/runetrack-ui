import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanOverviewComponent } from './clan-overview.component';
import { ErrorModule } from '../../../shared/error/error.module';
import { LoaderModule } from '../../../shared/loader/loader.module';
import { MatCardModule, MatTooltipModule } from '@angular/material';

@NgModule({
    declarations: [ ClanOverviewComponent ],
    imports: [
        CommonModule,
        MatTooltipModule,
        MatCardModule,
        ErrorModule,
        LoaderModule
    ]
})
export class ClanOverviewModule {
}
