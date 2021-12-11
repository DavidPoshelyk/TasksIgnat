import React from 'react'
import PreJunior from "./pages/PreJunior";
import {Routes, Route} from 'react-router-dom'
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus',
    // ERROR: '/error-404'
    // add paths
}

function Routes2() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>



            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<div>JUNIOR</div>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<div>JUNIOR_PLUS</div>}/>
            <Route path={'/*'} element={<Error404/>}  />



            </Routes>
        </div>
    )
}

export default Routes2
