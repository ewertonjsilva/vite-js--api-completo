import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    // Carregar usuário do localStorage ao iniciar
    useEffect(() => {
        const userStorage = localStorage.getItem('user_burguer');
        if (userStorage) setUsuario(JSON.parse(userStorage));
    }, []);

    const loginUser = (user) => {
        setUsuario(user);
        localStorage.setItem('user_burguer', JSON.stringify(user));
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('user_burguer');
    };

    return (
        <AuthContext.Provider value={{ usuario, loginUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);