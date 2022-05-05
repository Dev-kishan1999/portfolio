import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';
import Main from './components/MainPage/Main';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Cotact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      
      {/* <Card /> */}

      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/Work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
