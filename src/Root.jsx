import {useState} from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { DataProvider } from './context/DataContext.jsx'
function Root({search, setSearch}) {
       
  return (
    <div className='App'>
   
    <Header title="React js Blog" />
    <DataProvider>
   <Nav search={search} setSearch={setSearch} />
    <Outlet  />
   <Footer /> 
   </DataProvider> 
   
   </div>
  )
}

export default Root