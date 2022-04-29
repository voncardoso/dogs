import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRouter from './components/Help/ProtectedRouter';
import Home from './components/Home';
import Login from './components/Login/Login'; 
import User from './components/User/User';
import {UserStorage} from './UserContext';

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/** /login/* o asteristico dentro da rota especifica que exiestes subrotas */}
          <Route path='/login/*' element={<Login />}/>
          <Route path='conta/*' 
            element={
              <ProtectedRouter>
                <User/>
              </ProtectedRouter>}
            />
        </Routes>
        <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
