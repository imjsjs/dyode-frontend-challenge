import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import Topbar from './sections/Topbar';
import Header from './sections/Header';
import Home from './pages/Home';
import Footer from './sections/Footer';
import MobileMenu from './sections/MobileMenu';

const App = () => {
  return (
    <Router>
      <div className="App">
        <MobileMenu/>
        <Topbar/>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
