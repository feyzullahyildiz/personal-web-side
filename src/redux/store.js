import {createStore, combineReducers} from 'redux'
import {main} from './reducer.js'
let store
if(process.env.NODE_ENV === 'development'){
    store = createStore(combineReducers({main}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}else{
    store = createStore(combineReducers({main}))
}
export {store}