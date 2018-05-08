
import { fromJS } from 'immutable';
import auditReducer from '../reducer';

describe('auditReducer', () => {
  it('returns the initial state', () => {
    expect(auditReducer(undefined, {})).toEqual(fromJS({}));
  });
});
