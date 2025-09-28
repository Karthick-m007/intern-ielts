import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Features from './Pages/Featured';
import Hero from './Pages/Herosection';
import Testimonials from './Pages/Testimonial';


function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
