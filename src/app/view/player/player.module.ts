import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { PlayerOverviewModule } from './player-overview/player-overview.module';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { PlayerService } from './player.service';
import { LoaderModule } from '../../shared/loader/loader.module';
import { NumberPipe } from '../../shared/rs/pipe/number.pipe';
import { ErrorModule } from '../../shared/error/error.module';

@NgModule({
	declarations: [ PlayerComponent, SkillDetailComponent ],
	providers: [ PlayerService, NumberPipe ],
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule,
		MatTooltipModule,
		MatCardModule,
		ChartsModule,
		PlayerRoutingModule,
		PlayerOverviewModule,
		LoaderModule,
		ErrorModule
	]
})
export class PlayerModule {
}