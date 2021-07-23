import {UPDATE_VALUE} from '../types'

const initialState = {
    
}

const Reducer=( state =initialState, action)=>{
    console.log(action)
    switch(action.type){
        case UPDATE_VALUE:
            return{...state, [action.payload.name]: action.payload.value}
        default:
            return { ...state }
    }
}

export default Reducer