import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import ErrorPage from './ErrorPage.jsx'
import "./index.css"
import { useState } from 'react'
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from 'react-router-dom'
import Home from './Home.jsx'
import NewPost from './NewPost.jsx'
import Missing from './Missing.jsx'
import PostPage from './PostPage.jsx'
import "./index.css"






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
)
