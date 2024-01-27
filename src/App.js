import './App.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import WindowProvider from './components/WindowSizeContext';

function App() {
  return (
    <>
    <WindowProvider>
      <div className='container'>
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </WindowProvider>
    </>
  );
}

export default App;
