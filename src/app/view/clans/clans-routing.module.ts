import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClanOverviewComponent } from './clan-overview/clan-overview.component';

const routes: Routes = [
    {
        path: ':clanName',
        component: ClanOverviewComponent
    },
    {
        path: '',
        component: ClanOverviewComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ClansRoutingModule {
}
