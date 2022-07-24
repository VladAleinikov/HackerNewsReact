
import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from './components/UI/Header';
import ThemeSwitcher from './components/UI/ThemeSwitcher';
import { ThemeContext } from './context';
import './style/main.css'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

function App() {
  let theme = "dark";



  return (
    <ThemeContext.Provider value={{ theme }}>
      <BrowserRouter>
        <ThemeSwitcher />
        <Header />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}>
          <AppRouter />
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
