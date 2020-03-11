export const changeList = (obj) => {
    return {
        type: 'ADD_ITEM',
        payload: obj
    }
}
export const edit = (item) => {
    return {
        type: 'EDIT_ITEM',
        payload: item
    }
}
export const del = (id) => {
    return {
        type: 'DELETE_ITEM',
        id: id
    }
}
