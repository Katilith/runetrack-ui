import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RsService } from '../../../shared/rs/rs.service';
import { ClanInfo } from '../../../shared/rs/rs.domain';
import { MobileService } from '../../../layout/mobile/mobile.service';

@Component({
    selector: 'rune-clan-overview',
    templateUrl: './clan-overview.component.html',
    styleUrls: [ './clan-overview.component.scss' ]
})
export class ClanOverviewComponent implements OnInit {
    
    private _clanName: string = '';
    private _clanInfo: ClanInfo;
    private _loading: boolean = true;
    private _error: boolean = false;
    
    public constructor(private route: ActivatedRoute,
                       private router: Router,
                       private rsService: RsService,
                       private mobileService: MobileService) {
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
        this._loading = true;
        this._clanName = clanName;
        this._clanInfo = null;
        
        this.rsService.getClanDetails(clanName)
            .then(clanInfo => {
                this._clanInfo = clanInfo;
                this._loading = false;
            })
            .catch(() => {
                this._error = true;
                this._loading = false;
            });
    }
    
    public goToPlayerOverview(playerName: string): void {
        this.router.navigate([ '/', playerName ]);
    }
    
    public get clanName() {
        return this._clanName;
    }
    
    public get clanInfo() {
        return this._clanInfo;
    }
    
    public get loading() {
        return this._loading;
    }
    
    public get error() {
        return this._error;
    }
    
    public get isMobileSize() {
        return this.mobileService.isMobileSize;
    }
    
}
