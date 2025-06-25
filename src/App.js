import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/loginPage/LoginPage';
import HomePage from './pages/home/home_page';
import EditCards from './pages/editCard/EditCards ';
import Header from './components/ui/header/Header';
import { ThemeProvider } from './theme/themeContext';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Portifolio from './pages/portifolio/Portifolio';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Portifolio />} />
            <Route path='/login' element={<LoginPages />} />
            <Route path='/home' element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>} />
            <Route path='/EditCards' element={
              <PrivateRoute>
                <EditCards />
              </PrivateRoute>} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

{/* <Link to={'/home'}>HOME</Link> */ }

