import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
	MatButtonModule,
	MatCardModule,
	MatDividerModule,
	MatIconModule,
	MatTabsModule,
	MatTooltipModule
} from '@angular/material';

import { RsModule } from '../../rs/rs.module';
import { LoaderModule } from '../../loader/loader.module';
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
