import { Route, Routes } from 'react-router'

import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'


function App() {

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Layout/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>        
    </>
  )
}

export default App
