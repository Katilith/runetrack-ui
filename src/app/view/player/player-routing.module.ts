import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { PlayerOverviewComponent } from './player-overview/player-overview.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: 'skills/:skillName',
                component: SkillDetailComponent
            },
            {
                path: '',
                component: PlayerOverviewComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PlayerRoutingModule {
}
