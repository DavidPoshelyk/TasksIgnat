

export const homeWorkReducer = (state: Array<{_id:number, name:string, age:number}> , action:{type:string}):  Array<{_id:number, name:string, age:number}>  => {
    switch (action.type) {
        case 'UP': {
           return  [...state].sort((a:{_id:number, name:string, age:number}, b:{_id:number, name:string, age:number})=> a.name.localeCompare(b.name))
        }
        case 'DOWN': {
            return  [...state].sort((a:{_id:number, name:string, age:number}, b:{_id:number, name:string, age:number})=> b.name.localeCompare(a.name))

        }
        case 'AGE18': {
            return state.filter(f=> f.age >= 18)
        }
        default: return state
    }
}