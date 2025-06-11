import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/loginPage/LoginPage';
import HomePage from './pages/home/home_page';
import EditCards from './pages/editCard/EditCards ';
import Header from './components/ui/header/Header';

function App() {
  
  return (
    <div className="App">
      <Header/>
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

