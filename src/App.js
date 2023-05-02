import {Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Project from './pages/Project/Project'
import Contact from './pages/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path ='/about' Component={About}/>
        <Route path ='/skills' Component={Skills} />
        <Route path  = "/projects" Component={Project}/>
        <Route path ="/contact" Component={Contact}/>
      </Routes>
    </div>
  );
}

export default App;
