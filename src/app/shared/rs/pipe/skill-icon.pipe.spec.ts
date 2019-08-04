import { SkillIconPipe } from './skill-icon.pipe';
import { Skills } from '../rs.constants';

describe('SkillIconPipe', () => {
    let pipe: SkillIconPipe;
    
    beforeEach(() => pipe = new SkillIconPipe());
    
    it('should return the correct icon for the Attack skill', () => {
        const input = Skills.ATTACK;
        const output = 'skill-icon icon-attack';
        expect(pipe.transform(input)).toEqual(output);
    });
    
    it('should return the correct icon for the Runecrafting skill', () => {
        const input = Skills.RUNECRAFTING;
        const output = 'skill-icon icon-runecrafting';
        expect(pipe.transform(input)).toEqual(output);
    });
    
    it('should return the correct icon for the Mining skill', () => {
        const input = Skills.MINING;
        const output = 'skill-icon icon-mining';
        expect(pipe.transform(input)).toEqual(output);
    });
    
    it('should return the correct icon for the Invention skill', () => {
        const input = Skills.INVENTION;
        const output = 'skill-icon icon-invention';
        expect(pipe.transform(input)).toEqual(output);
    });
});
