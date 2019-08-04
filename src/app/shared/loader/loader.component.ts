import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rune-loader',
    templateUrl: './loader.component.html',
    styleUrls: [ './loader.component.scss' ]
})
export class LoaderComponent implements OnInit {
    
    @Input() public type: 'LARGE' | 'SMALL' = 'LARGE';
    @Input() public size: string = '100';
    @Input() public overlay: boolean = true;
    
    public constructor() {
    }
    
    public ngOnInit(): void {
    }
    
    public get className() {
        let className = this.type === 'LARGE' ? 'rune-large' : 'rune-small';
        
        if(this.overlay) {
            className += ' rune-overlay';
        }
        
        return className;
    }
    
}
