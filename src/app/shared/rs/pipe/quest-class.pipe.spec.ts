import { QuestClassPipe } from './quest-class.pipe';
import { PlayerQuest } from '../rs.domain';

describe('QuestClassPipe', () => {
    let pipe: QuestClassPipe;
    
    beforeEach(() => pipe = new QuestClassPipe());
    
    it('should return the correct classes for a quest that has not been started', () => {
        const input = {
            status: 'NOT_STARTED'
        };
        const output = 'rune-quest rune-quest-not-started';
        
        expect(pipe.transform(input as PlayerQuest)).toEqual(output);
    });
    
    it('should return the correct classes for a quest that is in progress', () => {
        const input = {
            status: 'STARTED'
        };
        const output = 'rune-quest rune-quest-started';
        
        expect(pipe.transform(input as PlayerQuest)).toEqual(output);
    });
    
    it('should return the correct classes for a quest that is complete', () => {
        const input = {
            status: 'COMPLETED'
        };
        const output = 'rune-quest rune-quest-completed';
        
        expect(pipe.transform(input as PlayerQuest)).toEqual(output);
    });
});
