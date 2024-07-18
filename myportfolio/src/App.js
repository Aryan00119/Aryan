import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Nav from './utills/common/NavBar';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import ContactMe from './components/contact/ContactMe';
import ChatBot from './components/Chatbot/Chatbot'



function App() {
  return (
    <div className='App'>
        <BrowserRouter>
      <Nav></Nav>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Education' element={<Education/>}></Route>
      <Route path='/Contact' element={<ContactMe/>}></Route>
      <Route path='/ChatBot' element={<ChatBot/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
} 

export default App;