import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/loginPage/LoginPage';
import HomePage from './pages/home/home_page';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          {/* <Link to={'/home'}>HOME</Link> */}
          <Link to={'/'}>LOGIN</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<LoginPages />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

