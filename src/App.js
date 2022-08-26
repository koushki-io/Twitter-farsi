import React from 'react'
import { ToastContainer } from 'react-toastify';
import './App.scss'
import Layout from './components/layout/Layout'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Home from "./components/pages/home/Home"
import Hashtag from "./components/pages/tweetByHashtag/Hashtag"
import User from "./components/pages/tweetByUser/User"
import PageNotFound from "./components/pages/Page404/PageNotFound"
import AuthPage from './components/pages/auth/AuthPage'
import { useSelector } from 'react-redux'


const flag=true
function App() {
 const{user}= useSelector(x=>x.getSignUp)
  return (
    <div className='App'>
      <ToastContainer 
    
    theme='colored'
    />
      <BrowserRouter>
{!user.name 
      ?
       <Routes>
      <Route path='/login' element={<AuthPage/>}/>
      <Route path='/' element={<Navigate to="login"/>}/>
     <Route path='*' element={<PageNotFound/>}/>

      </Routes> 
    :
    <Layout>
    <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/hashtags/:hashtagId' element={<Hashtag/>}/>
     <Route path='/users' element={<User/>}/>
     <Route path='/' element={<Navigate to='home'/>}/>
     <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   </Layout>
        }
      

      
    
      </BrowserRouter>



    </div>
  )
}

export default App