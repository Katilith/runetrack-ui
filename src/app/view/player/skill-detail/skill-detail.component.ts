import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { skillNames, skillNamesLower } from '../../../shared/rs/rs.constants';
import { RsService } from '../../../shared/rs/rs.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as moment from 'moment';
import { NumberPipe } from '../../../shared/rs/pipe/number.pipe';
import { MobileService } from '../../../layout/mobile/mobile.service';

@Component({
	selector: 'rune-skill-detail',
	templateUrl: './skill-detail.component.html',
	styleUrls: [ './skill-detail.component.scss' ]
})
export class SkillDetailComponent implements OnInit {
	
	private skillId: number = -1;
	private _loading: boolean = true;
	public barChartOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			labels: {
				fontColor: 'rgba(255, 255, 255, 0.8)'
			}
		},
		scales: {
			xAxes: [{
				ticks: {
					fontColor: 'rgba(255, 255, 255, 0.8)'
				}
			}],
			yAxes: [{
				ticks: {
					fontColor: 'rgba(255, 255, 255, 0.8)',
					callback: (value, index, values) => {
						return this.numberPipe.transform(value);
					}
				}
			}]
		},
		tooltips: {
			titleFontSize: 14,
			bodyFontSize: 14,
			backgroundColor: 'rgba(97,97,97,.9)',
			xPadding: 8,
			cornerRadius: 4
		},
		onResize: (newSize: Chart.ChartSize) => { this.resizeChart(); }
	};
	public barChartLabels: Label[] = [];
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartColors: Color[] = [ { backgroundColor: '#2196f3' } ];
	
	public barChartData: ChartDataSets[] = [
		{ data: [], label: '' }
	];
	
	private skip: number = -1;
	private _currentLevel: number = 1;
	
	public constructor(private route: ActivatedRoute,
		private router: Router,
		private rsService: RsService,
		private playerService: PlayerService,
		private mobileService: MobileService,
		private numberPipe: NumberPipe) {
	}
	
	public ngOnInit(): void {
		this.route.params.subscribe(params => {
			if(!params.skillName) {
				this.router.navigate([ 'p', this.playerService.profile.name ]);
				return;
			}
			
			const skillName = params.skillName.toLowerCase();
			const index = skillNamesLower.indexOf(skillName);
			
			if(index === -1) {
				this.router.navigate([ 'p', this.playerService.profile.name ]);
				return;
			}
			
			for(const skillData of this.playerService.profile.skillvalues) {
				if(skillData.id === index) {
					this._currentLevel = skillData.level;
					break;
				}
			}
			
			this._loading = true;
			this.skillId = index;
			this.barChartData[0].label = skillNames[ this.skillId ] + ' XP';
			this.skip = -1;
			this.getSkillGains();
		});
	}
	
	private getSkillGains(): void {
		if(!this.playerService.xpGains[ this.skillId ]) {
			this.rsService.getMonthlySkillGains(this.playerService.profile.name, this.skillId)
				.then(response => {
					this.playerService.xpGains[ this.skillId ] = response.monthlyXpGain[ 0 ];
					this.resizeChart();
					this._loading = false;
				});
		} else {
			this.resizeChart();
			this._loading = false;
		}
	}
	
	private formatChartData(skip: number = 0): void {
		if(this.xpGains.monthData.length === 0) {
			return;
		}

		this.skip = skip;
		this.barChartData[0].data = [];
		this.barChartLabels = [];
		
		const xpGains = this.xpGains;
		for(let i = 0; i < xpGains.monthData.length; i++) {
			if(i < skip) {
				continue;
			}
			
			const monthly = xpGains.monthData[i];
			this.barChartData[0].data.push(monthly.xpGain);
			this.barChartLabels.push(moment.utc(monthly.timestamp).format('MMM \'YY'));
		}
	}
	
	private resizeChart(): void {
		const width = this.mobileService.screenWidth;
		let skip = 0;
		
		if(width < 500) {
			skip = 8;
		} else if(width < 600) {
			skip = 7;
		} else if(width < 650) {
			skip = 6;
		} else if(width < 700) {
			skip = 5;
		} else if(width < 750) {
			skip = 4;
		} else if(width < 800) {
			skip = 3;
		} else if(width < 850) {
			skip = 2;
		} else if(width < 900) {
			skip = 1;
		}
		
		if(this.skip !== skip) {
			this.formatChartData(skip);
		}
	}
	
	public get currentMonthData() {
		return this.xpGains.monthData[this.xpGains.monthData.length - 1];
	}
	
	public get currentLevel() {
		return this._currentLevel;
	}
	
	public get backRoute() {
		return [ '/', this.playerService.profile.name ];
	}
	
	public get xpGains() {
		return this.playerService.xpGains[ this.skillId ];
	}
	
	public get loading() {
		return this._loading;
	}
	
	public get skillName() {
		return skillNames[this.skillId];
	}
	
	public get isMobileSize() {
		return this.mobileService.isMobileSize;
	}
	
}
