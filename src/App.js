import './App.scss';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import About from './components/About'
import Footer from './components/Footer';
import WindowProvider from './components/WindowSizeContext';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {
  return (
    <>
    <WindowProvider>
      <div className='container'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/reservations' element={<Reservations/>}/>
          <Route path='/order' element={<OrderOnline/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </div>
    </WindowProvider>
    </>
  );
}

export default App;
