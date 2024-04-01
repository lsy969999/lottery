import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout.tsx'
import Error from './pages/Error.tsx'
import Home from './pages/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Layout/> } errorElement={ <Error/> } >
                    <Route index element={ <Home/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
