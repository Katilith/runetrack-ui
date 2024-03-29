import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillOverviewComponent } from './skill-overview.component';
import { RsModule } from '../../../../../shared/rs/rs.module';
import { LoaderModule } from '../../../../../shared/loader/loader.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDividerModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { DecimalPipe } from '@angular/common';

describe('SkillOverviewComponent', () => {
    let component: SkillOverviewComponent;
    let fixture: ComponentFixture<SkillOverviewComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SkillOverviewComponent ],
            imports: [ RouterTestingModule, MatIconModule, MatDividerModule, MatTooltipModule, RsModule, LoaderModule ],
            providers: [ DecimalPipe ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(SkillOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
