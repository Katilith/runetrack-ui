import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { RsModule } from '../../../shared/rs/rs.module';
import { LoaderModule } from '../../../shared/loader/loader.module';
import { PlayerOverviewSkillsComponent } from './player-overview-skills/player-overview-skills.component';
import { PlayerOverviewQuestsComponent } from './player-overview-quests/player-overview-quests.component';
import { PlayerOverviewComponent } from './player-overview.component';
import { PlayerOverviewActivityComponent } from './player-overview-activity/player-overview-activity.component';
import { SkillOverviewComponent } from './player-overview-skills/skill-overview/skill-overview.component';

@NgModule({
    declarations: [
        PlayerOverviewComponent,
        PlayerOverviewSkillsComponent,
        PlayerOverviewQuestsComponent,
        PlayerOverviewActivityComponent,
        SkillOverviewComponent
    ],
    exports: [
        PlayerOverviewComponent
    ],
    providers: [
        DecimalPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatCardModule,
        MatTooltipModule,
        MatButtonModule,
        MatDividerModule,
        MatTabsModule,
        RsModule,
        LoaderModule
    ]
})
export class PlayerOverviewModule {
}
