import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonoals/Testimonial';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonial/>
    </div>
  );
}

export default App;