import './App.css';
import About from './components/About/About';
import Clients from './components/Clients/Clients';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Practices from './components/Practices/Practices';
import FAQ from './components/FAQ/FAQ';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
  return (
    <>
      <Home />
      <About />
      <Practices />
      <Clients />
      <Team />
      <FAQ />
      <Newsletter />
    </>
  );
}

export default App;
