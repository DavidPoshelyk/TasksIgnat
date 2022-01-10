
 export type stateType = {_id:number, name:string, age:number}
export const homeWorkReducer = (state: Array<stateType> , action:{type:string}):  Array<stateType>  => {
    switch (action.type) {
        case 'UP': {
           return  [...state].sort((a:stateType, b:stateType)=> a.name.localeCompare(b.name))
        }
        case 'DOWN': {
            return  [...state].sort((a:stateType, b:stateType)=> b.name.localeCompare(a.name))

        }
        case 'AGE18': {
            return state.filter(f=> f.age >= 18)
        }
        default: return state
    }
}