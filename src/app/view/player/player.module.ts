import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { PlayerOverviewModule } from './player-overview/player-overview.module';
import { PlayerService } from './player.service';
import { LoaderModule } from '../../shared/loader/loader.module';
import { NumberPipe } from '../../shared/rs/pipe/number.pipe';
import { ErrorModule } from '../../shared/error/error.module';
import { SkillDetailModule } from './skill-detail/skill-detail.module';

@NgModule({
    declarations: [ PlayerComponent ],
    providers: [ PlayerService, NumberPipe ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        PlayerRoutingModule,
        PlayerOverviewModule,
        SkillDetailModule,
        LoaderModule,
        ErrorModule
    ]
})
export class PlayerModule {
}
