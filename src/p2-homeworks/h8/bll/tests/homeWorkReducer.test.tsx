import React from 'react'
import {homeWorkReducer, stateType} from '../homeWorkReducer'

let initialState:Array<stateType>

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})
test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'UP'})
    expect(newState).toEqual( [
         { _id: 1, name: 'Александр', age: 66 },
         { _id: 3, name: 'Виктор', age: 44 },
         { _id: 4, name: 'Дмитрий', age: 40 },
         { _id: 5, name: 'Ирина', age: 55 },
         { _id: 2, name: 'Коля', age: 16 },
         { _id: 0, name: 'Кот', age: 3 }
     ])
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'DOWN'})
    expect(newState).toEqual( [
       { _id: 0, name: 'Кот', age: 3 },
       { _id: 2, name: 'Коля', age: 16 },
       { _id: 5, name: 'Ирина', age: 55 },
       { _id: 4, name: 'Дмитрий', age: 40 },
       { _id: 3, name: 'Виктор', age: 44 },
       { _id: 1, name: 'Александр', age: 66 }
   ])
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'AGE18'})
    expect(newState).toEqual([
        { _id: 1, name: 'Александр', age: 66 },
        { _id: 3, name: 'Виктор', age: 44 },
        { _id: 4, name: 'Дмитрий', age: 40 },
        { _id: 5, name: 'Ирина', age: 55 }
    ])


})
