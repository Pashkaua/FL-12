
const changeList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.payload
            ];
        case 'EDIT_ITEM':
            return state.map(item => {
                if (+item.id === +action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            });
        case 'DELETE_ITEM':
            return state.filter((item) => {
                return +item.id !== +action.id
            })

        default:
            return state;
    }
}

export default changeList;

