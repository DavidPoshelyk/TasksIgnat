import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'


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

    let inputClass = (New.length <= 2 ? s.error : s.add)
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === "Enter") {
            addUser()
        }
    }


    return (
        <div onKeyPress={onKeyPress}>
            <input value={New} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>

            <div>{error}</div>
        </div>
    )
}

export default Greeting
