import {GET_STUDENTS} from '../Actions/students.jsActions/constantes'
const initstate={
    students:[]
}

 export const studentsReducer=( state=initstate,{type,payload})=>{
   switch (type) {
       case GET_STUDENTS:
        return {...state,
            students: payload}

       default: return state
          
   }
}