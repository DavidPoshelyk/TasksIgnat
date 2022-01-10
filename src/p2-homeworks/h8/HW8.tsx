import React, {useState} from 'react'
import {homeWorkReducer, stateType} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'



 export const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<stateType>>(initialPeople) // need to fix any

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <span>{p.name} </span>
           <span> {p.age}</span>
        </div>
    ))

    const sortUp = (type:string) => setPeople(homeWorkReducer(initialPeople, {type}))


    return (
        <div>
            <hr/>
            <b> homeworks 8 </b>

            {/*should work (должно работать)*/}
            {finalPeople}

            <div><SuperButton onClick={()=>sortUp('UP')}>sort up</SuperButton></div>
            <div><SuperButton onClick={()=>sortUp('DOWN')}>sort down</SuperButton></div>
            <div><SuperButton onClick={()=>sortUp('AGE18')}>check 18</SuperButton></div>



            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
