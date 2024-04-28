import './App.css';
import './Assets/Font/FOT-RodinBokutoh\ Pro\ EB.woff';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import ToDoPage from './Pages/ToDoPage';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element = {<LandingPage />} />
        <Route path="/todo" element = {<ToDoPage />} />
        <Route path="/about" element = {<AboutPage />} />
      </Routes>
      
      </BrowserRouter>

    </>
  );
}

export default App;
