import { combineReducers } from 'redux'
import { INIT_MOCKUP_DATA } from '../types';

export const testReducer = (state = [], { type, payload }) => {
    switch (type) {
        case INIT_MOCKUP_DATA:
            return payload
        default:
            return state
    }
}

export default combineReducers({
    test: testReducer
})