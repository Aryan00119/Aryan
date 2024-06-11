import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<About></About>}></Route>
          <Route path='/Education' element={<Education></Education>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
          <Route path='/Projects' element={<Projects></Projects>}></Route>
          <Route path='/Resume' element={<Resume></Resume>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>



    </div>
  );
}

export default App;
