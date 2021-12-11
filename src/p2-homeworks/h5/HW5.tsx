import React from 'react'
import { HashRouter} from 'react-router-dom'
import Header from './Header'
import Routes2 from './Routes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routes2/>

            </HashRouter>
        </div>
    )
}

export default HW5
