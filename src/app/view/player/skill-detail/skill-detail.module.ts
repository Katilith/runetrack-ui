import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { ErrorModule } from '../../../shared/error/error.module';
import { LoaderModule } from '../../../shared/loader/loader.module';
import { SkillDetailComponent } from './skill-detail.component';
import { PlayerService } from '../player.service';
import { NumberPipe } from '../../../shared/rs/pipe/number.pipe';

@NgModule({
    declarations: [ SkillDetailComponent ],
    exports: [ SkillDetailComponent ],
    providers: [ PlayerService, NumberPipe ],
    imports: [
        CommonModule,
        RouterModule,
        MatTooltipModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        ChartsModule,
        ErrorModule,
        LoaderModule
    ]
})
export class SkillDetailModule {
}
