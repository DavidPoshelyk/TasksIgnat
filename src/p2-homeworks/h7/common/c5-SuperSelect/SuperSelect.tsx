import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        value,
        ...restProps
    }
) => {
    const mappedOptions: any[] =  options ? options.map((m,i)=> (<option key={i}>{m}</option> )):[]// map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        {onChangeOption && onChangeOption(e.currentTarget.selectedIndex)}
        console.log(e.currentTarget.selectedIndex)
        console.log(value)
    }

    return (
        <select   onChange={onChangeCallback} value={value}  >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
