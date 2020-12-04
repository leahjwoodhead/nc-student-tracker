import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Router } from '@reach/router';
import Home from './components/Home';
import Students from './components/Students';
import Graduates from './components/Graduates';
import BlockBreakdown from './components/BlockBreakdown';
import StudentProfile from './components/StudentProfile';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Router>
        <Home path='/' />
        <Students path='/students' />
        <StudentProfile path='/students/:student_id' />
        <Graduates path='/graduates' />
        <BlockBreakdown path='/blocks' />
      </Router>
    </div>
  );
}

export default App;
