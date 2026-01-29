import style from "./last_text.module.scss";
import BtnsText from "../btns_info/Btns_texts";

function Last_text({ isRegister, toggleMode }) {
  return (
    <>
      <div className={style.Last_text}>
        <BtnsText
          text={
            isRegister
              ? "Já tem uma conta? Faça Login..."
              : "Não tem uma Conta? Crie uma aqui..."
          }
          onClick={toggleMode}
        />
      </div>
    </>
  );
}

export default Last_text;
