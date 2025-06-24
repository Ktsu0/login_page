import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [taLogado, settaLogado] = useState(() => {
        const saved = localStorage.getItem("taLogado")
        return saved === "true" ? true : false
    })

    const login = () => {
        settaLogado(true)
        localStorage.setItem("taLogado", "true")
    }

    const logout = () => {
        settaLogado(false)
        localStorage.setItem("taLogado", "false")
    }

    return (
        <AuthContext.Provider value={{ taLogado, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext) 