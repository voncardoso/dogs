import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login/Login'; 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/** /login/* o asteristico dentro da rota especifica que exiestes subrotas */}
          <Route path='/login/*' element={<Login />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
