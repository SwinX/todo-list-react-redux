import sortingReducer from '../../../src/reducers/sorting';
import {SortingTypes} from '../../../src/constants';
import ActionTypes from '../../../src/actions/types';

describe('sorting reducer', () => {
    describe('SET_TODO_SORTING', () => {
        it('should return sorting type passed in action', () => {
            const action = {
                type: ActionTypes.SET_TODO_SORTING,
                sorting: SortingTypes.DESCENDING
            };

            expect(sortingReducer(SortingTypes.ASCENDING, action))
                .to.be.equal(SortingTypes.DESCENDING);
        });
    });

    describe('misc actions', () => {
        it('should return previous sorting type', () => {
            const action = {type: ActionTypes.ADD_TODO};

            expect(sortingReducer(SortingTypes.DESCENDING, action))
                .to.be.equal(SortingTypes.DESCENDING);
        });

        it('should return ASCENDING sorting type as default sorting', () => {
            const action = {type: ActionTypes.ADD_TODO};

            expect(sortingReducer(undefined, action))
                .to.be.equal(SortingTypes.ASCENDING);
        });
    });
});
