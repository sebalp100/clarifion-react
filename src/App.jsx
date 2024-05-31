import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="w-full font-manrope">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
