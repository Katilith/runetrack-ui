import { Component, OnInit } from '@angular/core';
import { version, angularVersion } from '../../util/version';

@Component({
    selector: 'rune-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {
    
    public constructor() {
    }
    
    public ngOnInit(): void {
    }
    
    public get version() {
        return version;
    }

    public get angularVersion() {
        return angularVersion;
    }
    
}
