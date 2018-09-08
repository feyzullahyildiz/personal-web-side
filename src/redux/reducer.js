import {types} from './actions'
const defaultStore = {
    page: 'MAIN',
    nextAnimationDirection: undefined
}
const pageList = ['MAIN','BLOG', 'CONTACT', 'ABOUT']
export const main = (store = defaultStore, action) => {
    if(action.type === types.CHANGE_PAGE){
        const oldIndex = pageList.indexOf(store.page)
        const newIndex = pageList.indexOf(action.payload)
        const directionRight = newIndex > oldIndex ? true :false
        return Object.assign({}, store, {page: action.payload, nextAnimationDirection: directionRight})
    }

    return store
}