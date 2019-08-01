import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
	{
		path: 'p/:playerName',
		loadChildren: () => import('./player/player.module').then(m => m.PlayerModule)
	},
	{
		path: 'player/:playerName',
		loadChildren: () => import('./player/player.module').then(m => m.PlayerModule)
	},
	{
		path: ':playerName',
		loadChildren: () => import('./player/player.module').then(m => m.PlayerModule)
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
