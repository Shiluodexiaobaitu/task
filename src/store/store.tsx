import {createStore, combineReducers} from 'redux';
import {HomeData} from './home/reducer';



let store = createStore(combineReducers({
    HomeData
})
)

export default store