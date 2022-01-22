import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './AuthContext';
import GlobalStyle from './GlobalStyle';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      <GlobalStyle/>
    </AuthContextProvider>
  );
}

export default App;
