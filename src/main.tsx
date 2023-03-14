import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';

import App from './App';
<<<<<<< HEAD
=======
import { Providers } from './providers/providers';
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
