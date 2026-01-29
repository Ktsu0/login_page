import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import confetti from "canvas-confetti";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [taLogado, settaLogado] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const showCelebration = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 10000,
    };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  useEffect(() => {
    // Verificar sessão inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      settaLogado(!!session);
      setUser(session?.user || null);
      setLoading(false);
    });

    // Ouvir mudanças na autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      const isNowLoggedIn = !!session;

      // Se acabou de logar, comemora!
      if (!taLogado && isNowLoggedIn && event === "SIGNED_IN") {
        showCelebration();
      }

      settaLogado(isNowLoggedIn);
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, [taLogado]);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{ taLogado, user, loading, logout, showCelebration }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
