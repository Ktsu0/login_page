// Importa o componente Navigate para fazer redirecionamento
import { Navigate } from "react-router-dom"
// Importa o hook de autenticação que você criou
import { useAuth } from "./context/AuthContext"

// Componente que protege rotas privadas
const PrivateRoute = ({ children }) => {
    // Pega do contexto o estado de autenticação (se está logado ou não)
    const { taLogado } = useAuth()

    // Se está logado, renderiza os filhos normalmente
    // Se NÃO está logado, redireciona para a página "/"
    return taLogado ? children : <Navigate to="/" />
}

// Exporta o componente para ser usado nas rotas
export default PrivateRoute
