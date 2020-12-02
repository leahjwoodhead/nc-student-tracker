import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import { Router } from '@reach/router'
import Home from './pages/Home'
import Students from './pages/Students'
import Graduates from './pages/Graduates'
import BlockBreakdown from './pages/BlockBreakdown'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Router>
        <Home path="/"/>
        <Students path="/students"/>
        <Graduates path="/graduates"/>
        <BlockBreakdown path="/blocks"/>
      </Router>
    </div>
  );
}

export default App;
