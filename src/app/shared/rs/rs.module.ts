import { NgModule } from '@angular/core';
import { SkillIconPipe } from './pipe/skill-icon.pipe';
import { QuestClassPipe } from './pipe/quest-class.pipe';
import { MomentDatePipe } from './pipe/moment-date.pipe';
import { ActivityIconPipe } from './pipe/activity-icon.pipe';
import { NumberPipe } from './pipe/number.pipe';

@NgModule({
	declarations: [
		SkillIconPipe,
		QuestClassPipe,
		MomentDatePipe,
		ActivityIconPipe,
		NumberPipe
	],
	exports: [
		SkillIconPipe,
		QuestClassPipe,
		MomentDatePipe,
		ActivityIconPipe,
		NumberPipe
	]
})
export class RsModule {
}
