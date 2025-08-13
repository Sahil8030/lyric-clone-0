import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Blog from './components/Blog.jsx'
import Empower from './components/Empower.jsx'
import Resources from './components/Resources.jsx'
import Company from './components/Company.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/layout.jsx'
import App from './App.jsx'
import Career from './components/Career.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import SecurityPortal from './components/SecurityPortal.jsx'
import Terms from './components/Terms.jsx'
import Blog01 from './components/Blog01.jsx'
import BlogDetail from '../pages/BlogDetail.jsx'
import BookADemo from '../pages/BookADemo.jsx'
import Blog02 from './Blog02.jsx'
import Blog03 from './Blog03.jsx'
import Blog04 from './Blog04.jsx'
import Blog05 from './Blog05.jsx'
import Blog06 from './Blog06.jsx'
import Blog07 from './Blog07.jsx'
import Blog08 from './Blog08.jsx'
import Blog09 from './Blog09.jsx'
import Blog10 from './Blog10.jsx'
import Resource01 from './resource01.jsx'
import Resource02 from './resource02.jsx'
import Resource03 from './resource03.jsx'
import Resource04 from './resource04.jsx'
import Resource05 from './resource05.jsx'
import Resource06 from './resource06.jsx'
import Resource07 from './resource07.jsx'
import Resource08 from './resource08.jsx'
import Resource09 from './resource09.jsx'
import Resource10 from './resource10.jsx'
import Resource11 from './resource11.jsx'
import Resource12 from './resource12.jsx'
import Resource13 from './resource13.jsx'
const router =  createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Company",
        element:<Company/>,
      },
      {
        path:"/Blog",
        element:<Blog/>
      },
      {
        path:"/Resources",
        element:<Resources/>
      },
      {
        path:"/Empower",
        element:<Empower/>
      },
      {
        path:"/Career",
        element:<Career/>
      },
      {
        path:"/Careers",
        element:<Career/>
      },
      {
        path:"/PrivacyPolicy",
        element:<PrivacyPolicy/>
      },
      {
        path:"/SecurityPortal",
        element:<SecurityPortal/>
      },
      {
        path:"/Terms",
        element:<Terms/>
      },
      
      {
          path: "/learn/1",
        element: <Blog01 />
      },
      {
          path: "/book-a-demo",
        element: <BookADemo />
      },
      {
          path: "/learn/2",
        element: <Blog02 />
      },
      {
          path: "/learn/3",
        element: <Blog03 />
      },
      {
          path: "/learn/4",
        element: <Blog04 />
      },
      {
          path: "/learn/5",
        element: <Blog05 />
      },
      {
          path: "/learn/6",
        element: <Blog06 />
      },
      {
          path: "/learn/7",
        element: <Blog07 />
      },
      {
          path: "/learn/8",
        element: <Blog08 />
      },
      {
          path: "/learn/9",
        element: <Blog09 />
      },
      {
          path: "/learn/10",
        element: <Blog10 />
      },
      {
        path: "/resource/1",
        element: <Resource01 />
      },
      {
        path: "/resource/2",
        element: <Resource02 />
      },
      {
        path: "/resource/3",
        element: <Resource03 />
      },
      {
        path: "/resource/4",
        element: <Resource04 />
      },
      {
        path: "/resource/5",
        element: <Resource05 />
      },
      {
        path: "/resource/6",
        element: <Resource06 />
      },
      {
        path: "/resource/7",
        element: <Resource07 />
      },
      {
        path: "/resource/8",
        element: <Resource08 />
      },
      {
        path: "/resource/9",
        element: <Resource09 />
      },
      {
        path: "/resource/10",
        element: <Resource10 />
      },
      {
        path: "/resource/11",
        element: <Resource11 />
      },
      {
        path: "/resource/12",
        element: <Resource12 />
      },
      {
        path: "/resource/13",
        element: <Resource13 />
      },
      
      

      
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
