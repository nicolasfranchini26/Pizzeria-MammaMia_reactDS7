import { createContext, useState, useContext } from 'react';
import Swal from 'sweetalert2'

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  
  const logout = () => { 
    setToken(false);
    setToken(false);
      Swal.fire({
        text: 'Sesión Cerrada',
        icon: 'info'
      })
  }
  const login = () => setToken(true);
  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};