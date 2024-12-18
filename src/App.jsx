
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Link/Navbar';
import Home from "./Link/Home"
import About from './Link/About';
import Contact from './Link/Contact';
import Blog from './Link/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import DifinitionBlog from './Link/DifinitionBlogs';



function App() {
  
return<>


<Router>
  <AppNavbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/difinitionBlog/:id" element={<DifinitionBlog/>} />
     </Routes>
   </Router>
</>
}

export default App;
