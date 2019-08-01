import { NgModule } from '@angular/core';
import { SkillIconPipe } from './pipe/skill-icon.pipe';
import { QuestClassPipePipe } from './pipe/quest-class.pipe';
import { MomentDatePipe } from './pipe/moment-date.pipe';
import { ActivityIconPipe } from './pipe/activity-icon.pipe';
import { NumberPipe } from './pipe/number.pipe';

@NgModule({
	declarations: [
		SkillIconPipe,
		QuestClassPipePipe,
		MomentDatePipe,
		ActivityIconPipe,
		NumberPipe
	],
	exports: [
		SkillIconPipe,
		QuestClassPipePipe,
		MomentDatePipe,
		ActivityIconPipe,
		NumberPipe
	]
})
export class RsModule {
}
