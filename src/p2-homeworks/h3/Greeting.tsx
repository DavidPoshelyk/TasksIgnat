import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "./c2-SuperButton/SuperButton";
import SuperInputText from "./c1-SuperInputText/SuperInputText";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting = ({name, setNameCallback, addUser, error, totalUsers}: GreetingPropsType) => {
    let New = name.charAt(0).toUpperCase() + name.slice(1)

    let inputClass = (New.length <= 2 ? s.error : s.input)
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === "Enter") {
            addUser()
        }
    }


    return (
        <div className={s.div} onKeyPress={onKeyPress}>
            <SuperInputText placeholder={error} className={inputClass} value={New} onChange={setNameCallback}/>
            {/*<input value={New} onChange={setNameCallback} className={inputClass}/>*/}
           <SuperButton onClick={addUser} className={s.button}>add</SuperButton>
            {/*<button onClick={addUser}>add</button>*/}
           <b > {totalUsers}</b>


        </div>
    )
}

export default Greeting
