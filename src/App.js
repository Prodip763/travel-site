import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
      <div>
        <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:detail' element={<ServiceDetail></ServiceDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
