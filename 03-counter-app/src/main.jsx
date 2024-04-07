import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirtsApp } from './FirtsApp'
import './index.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirtsApp name='Mateo López' /> */}
        <CounterApp value={ 0 } />
    </React.StrictMode>
)


