import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPages from './pages/loginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPages/>}/>
      </Routes>
    </div>
  );
}

export default App;

// {<header>
//     <nav>
//       <link to={'/home'}>HOME</link> 
//       <link to={'/'}>LOGIN</link>
//       </nav>
//   </header>
// }