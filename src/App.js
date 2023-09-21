import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Header from './component/Header';
import Footer from './component/Footer';
import Services from './component/Services';
import Choose from './component/Choose';
import News from './component/News';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route  path='/service' element={<Services/>} />
          <Route  path='/choose' element={<Choose/>} />
          <Route  path='/news' element={<News/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
