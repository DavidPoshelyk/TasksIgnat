

const initState = 'some';

export const themeReducer = (state = initState, action: changeThemeType):string => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return state = action.value;
        }
        default: return state;
    }
};
type changeThemeType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (value:string) => {return {type:'CHANGE-THEME', value} as const}; // fix any