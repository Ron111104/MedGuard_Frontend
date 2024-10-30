import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children, user, signOut }) => {
  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);