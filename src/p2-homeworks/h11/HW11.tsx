import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import MultiRangeSlider from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={(arr)=>setValue1(arr) }
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <MultiRangeSlider min={0}
                                  max={1000}
                                  onChange={({ min, max }: { min: number; max: number }) =>
                                      setValue2(max-min)
                                      // console.log(`min = ${min}, max = ${max}`)
                                  }/>
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
