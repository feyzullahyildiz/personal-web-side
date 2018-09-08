import {createStore, combineReducers} from 'redux'
import {main} from './reducer.js'
const store = createStore(combineReducers({main}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export {store}