import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RsService } from '../../shared/rs/rs.service';

@Component({
    selector: 'rune-landing',
    templateUrl: './landing.component.html',
    styleUrls: [ './landing.component.scss' ]
})
export class LandingComponent implements OnInit {
    
    private _loading: boolean = false;
    public searchUsername: string = '';
    
    public constructor(private router: Router, private rsService: RsService) {
    }
    
    public ngOnInit(): void {
        const favoritePlayer: string = this.rsService.getFavoritePlayer();
        if(favoritePlayer !== null) {
            this._loading = true;
            this.router.navigate([ '/', favoritePlayer ]);
        }
    }
    
    public search(): void {
        const username = this.searchUsername.trim();
        if(username === '') {
            return;
        }
        
        this.router.navigate([ '/', username ]);
    }
    
    public get loading() {
        return this._loading;
    }
    
}
