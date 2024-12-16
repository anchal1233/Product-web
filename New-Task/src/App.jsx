import './App.css'
import Article from '../src/components/Article'
import Login from '../src/components/Login';
import Navbar from '../src/components/Navbar'
import 'bootstrap5/src/css/bootstrap.min.css'

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import ProtectedRoute from '../src/components/ProtectedRoute';
import Dashboard from '../src/components/Dashboard';
function App() {
 

  return (
    <>
    <Router>
    <Navbar/>

      <Routes>
        <Route path='/sign-up' element={<Article/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<ProtectedRoute >
          <Dashboard/>
        </ProtectedRoute>} />
      </Routes>
     
    </Router>
    

    </>
  )
}

export default App
