import React from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "./HW12.module.css";
import {changeThemeAC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme =useSelector<AppStoreType, string >(state=> state.themeReducer); // useSelector
    let dispatch = useDispatch()


    const onChangeCallback = (e: string) => {
        dispatch(changeThemeAC(e))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
               <select className={s[theme]} value={theme} onChange={(e) => {
                   onChangeCallback(e.currentTarget.value)
               }}>
                   {themes.map(m=> {
                       return <option value={m}> {m} </option>
                   })}
               </select>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
}

export default HW12;
