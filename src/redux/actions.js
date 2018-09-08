export const types = {
    CHANGE_PAGE: 'CHANGE_PAGE'
}


export const changePage = (page) =>{
    return {type: types.CHANGE_PAGE, payload: page}
}