import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/loginPage/LoginPage';
import HomePage from './pages/home/home_page';
import { textHeader } from './js/text';
import { useEffect } from 'react';
import EditCards from './pages/edit_card/EditCards ';

function App() {
  useEffect(() =>
    textHeader()
  )
  return (
    <div className="App">
      <header>
        <div className='text'>
          <h1 id="programming-title"></h1>
        </div>
        <nav className='btns'>
          <div className='btn'>
            <Link to={'/'} className='link'>LOGIN</Link>
            <div className='line_1'></div>
          </div>
          <div className='btn'>
            <Link to={'/home'} className='link'>HOME</Link>
            <div className='line_1'></div>
          </div>
          <div className='btn'>
            <Link to={'/EditCards'} className='link'>CARDS</Link>
            <div className='line_1'></div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<LoginPages />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/EditCards' element={<EditCards />} />
      </Routes>
    </div>
  );
}

export default App;

{/* <Link to={'/home'}>HOME</Link> */ }

