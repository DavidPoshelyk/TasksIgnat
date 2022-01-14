const initState = false

export const loadingReducer = (state:boolean = initState, action: loadingType): boolean => { // fix any
    switch (action.type) {
        case 'LOADING': {return state=action.value}
        default: return state
    }
}

type loadingType = ReturnType<typeof loadingAC>
export const loadingAC = (value:boolean) => {return{ type:'LOADING', value}as const} // fix any