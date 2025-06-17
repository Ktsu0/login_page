// Importa os hooks e ferramentas necessárias do React
import { createContext, useContext, useState, useEffect } from "react";

// Cria um contexto chamado ThemeContext
// Ele será usado para compartilhar o tema (claro ou escuro) pela aplicação
const ThemeContext = createContext();

// Componente Provider que disponibiliza o contexto para os filhos
export const ThemeProvider = ({ children }) => {

    // Estado para armazenar o tema atual ('light' ou 'dark')
    const [theme, setTheme] = useState(() => {
        // Ao iniciar, tenta buscar o tema salvo no localStorage
        // Se não tiver nada salvo, começa com 'light'
        return localStorage.getItem('app-thema') || 'light';
    });

    // Função que alterna entre tema claro e escuro
    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === 'light' ? 'dark' : 'light'; // Alterna o tema
            localStorage.setItem('app-theme', newTheme); // Salva o novo tema no localStorage
            return newTheme; // Atualiza o estado
        });
    };

    // useEffect roda toda vez que o tema muda
    useEffect(() => {
        // Aplica o tema no atributo data-theme da tag <html>
        // Isso permite que o CSS reaja às mudanças de tema usando [data-theme='dark'] ou [data-theme='light']
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // O Provider disponibiliza o tema atual e a função toggleTheme para os componentes filhos
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children} {/* Renderiza os componentes filhos que estão dentro do Provider */}
        </ThemeContext.Provider>
    );
};

// Hook personalizado para consumir o contexto facilmente nos componentes
export const useTheme = () => useContext(ThemeContext);
