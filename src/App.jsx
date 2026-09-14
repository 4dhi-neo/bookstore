import './App.css'
import { Route,Routes } from 'react-router-dom'

import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Pnf from './Pages/Pnf'

import Books from './User/Pages/Books'
import BookDetails from './User/Pages/BookDetails'
import Contact from './User/Pages/Contact'
import Profile from './User/Pages/Profile'

import Dashboard from './Admin/Pages/Dashboard'
import Resources from './Admin/Pages/Resources'
import Settings from './Admin/Pages/Settings'

function App() {
  

  return (
    <>
     <Routes>
      {/* Common */}
      <Route path='' element={<Home/>}/>
      <Route path='auth' element={<Auth/>}/>
      <Route path='/*' element={<Pnf/>}/>
      {/* User */}
      <Route path='books' element={<Books/>}/>
      <Route path='books/:bid' element={<BookDetails/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='profile' element={<Profile/>}/>
      {/* Admin */}
      <Route path='admin' element={<Dashboard/>}/>
      <Route path='admin/resources' element={<Resources/>}/>
      <Route path='admin/settings' element={<Settings/>}/>

     </Routes>
    </>
  )
}

export default App
