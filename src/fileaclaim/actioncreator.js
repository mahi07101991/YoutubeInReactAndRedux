import typos from './types';

export const setComponent = (component) => {
    return (dispatch) => {
        dispatch(
            {
                page:component,
                type: 'pageState'
            });
    }
}