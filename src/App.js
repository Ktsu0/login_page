import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/loginPage/LoginPage';
import HomePage from './pages/home/home_page';
import EditCards from './pages/editCard/EditCards ';
import Header from './components/ui/header/Header';
import { ThemeProvider } from './theme/themeContext';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path='/' element={<LoginPages />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/EditCards' element={<EditCards />} />
        </Routes>
        
      </ThemeProvider>

    </div>
  );
}

export default App;

{/* <Link to={'/home'}>HOME</Link> */ }

