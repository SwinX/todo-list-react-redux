import {setSorting} from '../../../src/actions/sorting';
import {SortingType} from '../../../src/constants';
import ActionType from '../../../src/actions/types';

describe('Modal action creators', () => {
    describe('showModal', () => {
        it('should create action with `SET_TODO_SORTING` type', () => {
            expect(setSorting().type).to.equal(ActionType.SET_TODO_SORTING);
        });

        it('should create action with passed sorting type', () => {
            expect(setSorting(SortingType.DESCENDING).sorting).to.equal(SortingType.DESCENDING);
        });
    });
});
