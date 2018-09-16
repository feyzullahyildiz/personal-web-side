import {types} from './actions'
import {languages} from '../text.js'

const defaultState = {
    page: 'MAIN',
    nextAnimationDirection: undefined,
    lang: languages['TR']
}
const pageList = ['MAIN','BLOG', 'CONTACT', 'ABOUT']
export const main = (state = defaultState, action) => {
    if(action.type === types.CHANGE_PAGE){
        const oldIndex = pageList.indexOf(state.page)
        const newIndex = pageList.indexOf(action.payload)
        const directionRight = newIndex > oldIndex ? true :false
        return Object.assign({}, state, {page: action.payload, nextAnimationDirection: directionRight})
    }else if(action.type === types.CHANGE_LANG){
        return Object.assign({}, state, {lang: languages[action.payload]})
    }

    return state
}