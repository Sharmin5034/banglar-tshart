import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home'
import OrderLayout from './Component/OrderLayout'
import LayoutMain from './Component/LayoutMain'
import About from './Component/About'
import Contact from './Component/Contact'


const router =createBrowserRouter([{
  path : '/',
  element:<LayoutMain></LayoutMain>,  
  children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('tsharts.json')
  
    },
    {
      path:'/review',
      element:<OrderLayout></OrderLayout>
    },
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/Contact',
      element:<Contact></Contact>
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
