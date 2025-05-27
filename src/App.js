import './App.css';
import Inputs from './components/ui/inputs/Inputs';
import BtnsText from './components/ui/btns_info/Btns_texts';
import Btns_login from './components/ui/btns_login/Btns_login';

function App() {
  return (
    <div className="App">
      <div className='frame'>
        <div className='Text_p'>
          <div className='login'>Login</div>
          <div className=''>Está sentindo esse cheirinho?</div>
        </div>
        <Inputs type="text" />
        <Inputs type="password" />
        <BtnsText text="Esqueceu sua Senha?" />
        <Btns_login text="ENTRAR" />
        <div>OU</div>
        <div className='icons'>
          
        </div>
        <div className='text final'>
          <p>Não tem uma Conta?</p>
          <BtnsText text="Crie uma aqui..." />
        </div>
      </div>
    </div>
  );
}

export default App;