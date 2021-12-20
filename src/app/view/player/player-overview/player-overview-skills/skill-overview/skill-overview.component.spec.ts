import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillOverviewComponent } from './skill-overview.component';
import { RsModule } from '../../../../../shared/rs/rs.module';
import { LoaderModule } from '../../../../../shared/loader/loader.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DecimalPipe } from '@angular/common';

describe('SkillOverviewComponent', () => {
    let component: SkillOverviewComponent;
    let fixture: ComponentFixture<SkillOverviewComponent>;
    
    beforeEach(waitForAsync(() => {
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
