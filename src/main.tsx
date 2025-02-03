import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'



import Layout from './components/Layout'
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'

import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Layout/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
