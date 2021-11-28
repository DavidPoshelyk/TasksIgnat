import React from 'react'
import c from "./Message.module.css"


type  typeData = {
    avatar: string,
    name: string,
    message: string,
    time:string
}



function Message(props:typeData) {
    return (
        <div className={c.global}>
            <div className={c.avatar}>
               <img src={props.avatar}/>
            </div>
            <div className={c.message}>
                {props.message}
            </div>
            <div className={c.name}>
                <b> {props.name}</b>
            </div>
            <div className={c.time}>
                   {props.time}
            </div>
        </div>
    )
}

export default Message;
