import styles from "./iconsLogin.module.scss";
import { supabase } from "../../../lib/supabase";

function IconsLogin({ type }) {
  const iconLogins = {
    google: "fa-brands fa-google",
    github: "fa-brands fa-github",
  };

  const loginComSocial = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    });
    if (error) alert("Erro ao logar com " + provider + ": " + error.message);
  };

  return (
    <>
      <i
        className={`${iconLogins[type]} ${styles.icon}`}
        onClick={() => loginComSocial(type)}
        style={{ cursor: "pointer" }}
      ></i>
    </>
  );
}

export default IconsLogin;
