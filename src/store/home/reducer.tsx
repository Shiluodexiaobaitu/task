import {COUNT, REMOVECOUNT} from './action-type';
import { ModifyAction } from './action'

let defaultState:any = {
    count: 0
  }

export const HomeData = (state = defaultState, action:ModifyAction):any => {
    switch(action.type){
        case COUNT:
            return {
                ...state,
                count: state.count + action.value
            }
        case REMOVECOUNT:
            return {
                ...state,
                count: state.count - action.value
            }
        default:
            return state
    }
}