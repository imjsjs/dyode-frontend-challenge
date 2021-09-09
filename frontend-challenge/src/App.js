import './App.scss'
import {BrowserRouter as Router} from 'react-router-dom'
import Topbar from './components/section.Topbar'
import Header from './components/section.Header'
import Home from './components/page.Home'
import Footer from './components/section.Footer'
import MobileMenu from './components/section.MobileMenu'

function App() {
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
