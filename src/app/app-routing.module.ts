import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './view/landing/landing.component';

const routes: Routes = [
    {
        path: 'clans',
        loadChildren: () => import('./view/clans/clans.module').then(m => m.ClansModule)
    },
    {
        path: ':playerName',
        loadChildren: () => import('./view/player/player.module').then(m => m.PlayerModule)
    },
    {
        path: '**',
        component: LandingComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
