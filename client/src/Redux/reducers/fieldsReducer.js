import {GET_FIELDS_LIST} from '../Actions/feildsAction/constantes'
const initstate={
    fields:[]
}

 export const fieldsReducers=( state=initstate,{type,payload})=>{
   switch (type) {
       case GET_FIELDS_LIST:
        return {...state,
             fields: payload}
          
   
       default: return state
          
   }
}