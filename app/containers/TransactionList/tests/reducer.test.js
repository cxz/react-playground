
import { fromJS } from 'immutable';
import transactionListReducer from '../reducer';

describe('transactionListReducer', () => {
  it('returns the initial state', () => {
    expect(transactionListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
