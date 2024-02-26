import React, { createContext, useContext, useState, ReactNode } from 'react';

const AuthWrapperContext = createContext<AuthWrapperContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthWrapperContextValue {
  isLoggedIn: boolean;
  loginGlobal: () => void;
  logoutGlobal: () => void;
}

export const AuthWrapper: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginGlobal = () => {
    setIsLoggedIn(true);
  };

  const logoutGlobal = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthWrapperContext.Provider value={{ isLoggedIn, loginGlobal, logoutGlobal }}>
      {children}
    </AuthWrapperContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthWrapperContext);

  if (!context) {
    // You can throw an error or return a default value if needed
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};