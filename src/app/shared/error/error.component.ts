import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rune-error',
    templateUrl: './error.component.html',
    styleUrls: [ './error.component.scss' ]
})
export class ErrorComponent implements OnInit {
    
    @Input() public message: string = '';
    @Input() public marginTop: number = null;
    @Input() public padding: number = 24;
    @Input() public center: boolean = false;
    @Input() public fontSize: number = 16;
    @Input() public icon: string = 'error_outline';
    @Input() public level: 'info' | 'warn' | 'error' = 'error';
    
    public constructor() {
    }
    
    public ngOnInit(): void {
    }
    
    public get iconSize() {
        return (this.fontSize + 4) + 'px';
    }
    
    public get styles() {
        const styles = {
            fontSize: this.fontSize + 'px',
            lineHeight: this.iconSize,
            padding: this.padding + 'px'
        };
        
        if(this.marginTop !== null) {
            styles[ 'marginTop' ] = this.marginTop + 'px';
        }
        
        if(this.level === 'error') {
            styles[ 'color' ] = '#ef5350';
        } else if(this.level === 'warn') {
            styles[ 'color' ] = '#FFC107';
        } else {
            styles[ 'color' ] = '#64b5f6';
        }
        
        if(this.center) {
            styles[ 'justifyContent' ] = 'center';
        }
        
        return styles;
    }
    
}
