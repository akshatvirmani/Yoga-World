import "./App.css"
import Header from "./components/common/header/Header"
import {BrowserRouter, Route,Routes} from "react-router-dom";

import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/journal" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
