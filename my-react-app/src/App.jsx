import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from './componants/footer';
import Home from './componants/home';
import Connt from './componants/contact';
import Gallery from './componants/gallery';
import Book from './componants/book';
function App() {
  return (
    <>
     <Router>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book/>} />
        <Route path="/contact" element={<Connt/>} />
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;

