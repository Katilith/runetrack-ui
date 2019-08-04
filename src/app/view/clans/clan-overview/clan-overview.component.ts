import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RsService } from '../../../shared/rs/rs.service';

@Component({
	selector: 'rune-clan-overview',
	templateUrl: './clan-overview.component.html',
	styleUrls: [ './clan-overview.component.scss' ]
})
export class ClanOverviewComponent implements OnInit {
	
	public constructor(private route: ActivatedRoute,
		private router: Router,
		private rsService: RsService) {
	}
	
	public ngOnInit(): void {
		this.route.params.subscribe(params => {
			if(!params || !params.clanName || params.clanName.trim() === '') {
				this.router.navigate([ '/' ]);
				return;
			}
			
			const clanName = params.clanName.trim();
			this.loadClan(clanName);
		});
	}
	
	private loadClan(clanName: string): void {
	
	}
	
}
