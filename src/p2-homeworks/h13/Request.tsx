import React, {ChangeEvent, useState} from 'react';
import {RequestApi} from "./RequestAPI";

const Request = () => {
    const [state, setState] = useState<boolean>()
    const [error, setError] = useState<string>()
    const [expectation, setExpectation] = useState<boolean>()


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setExpectation(true)
        RequestApi.post(e.currentTarget.checked).then(res => {
            if (res.status === 200) {
                setState(res.data.yourBody.success)
                setError(res.data.errorText)
                setExpectation(false)
            }
        })
            .catch(error => {
            setError(error.response.data.errorText)
            setState(error.response.data.yourBody.success)
            console.log({...error});
            console.warn(error.response ? error.response.data.errorText : error.message);
            setExpectation(false)
        })
    }

    return (
        <div>
            <input  disabled={expectation} checked={state} style={{width: '100px', height: '100px'}} type='checkbox' onChange={onChange}/>
            <span>{error}</span>
        </div>
    );
};

export default Request;