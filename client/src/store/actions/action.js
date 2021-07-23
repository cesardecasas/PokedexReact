import { UPDATE_VALUE} from '../types'
import {} from '../../services/service'

export const search=(name,value)=>({
    type:UPDATE_VALUE,
    payload: {
        name,
        value
      }
})

