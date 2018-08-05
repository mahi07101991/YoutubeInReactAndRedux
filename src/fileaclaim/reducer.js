import * as typos from './types';

export default (state = [], action) => {
    switch(action.type){
        case typos.pageState:
            return {
                pageState: action.page
            }
        default:
            return state;
    }
}