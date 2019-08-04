import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClansRoutingModule } from './clans-routing.module';
import { ClanOverviewModule } from './clan-overview/clan-overview.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ClansRoutingModule,
        ClanOverviewModule
    ]
})
export class ClansModule {
}
