export const types = {
    CHANGE_PAGE: 'CHANGE_PAGE',
    CHANGE_LANG: 'CHANGE_LANG',
}


export const changePage = (page) =>{
    return {type: types.CHANGE_PAGE, payload: page}
}

export const changeLang = (lang) =>{
    return {type: types.CHANGE_LANG, payload: lang}
}