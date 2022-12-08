import React from 'react';
import ReactDOM from 'react-dom/client';

// MUI.
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from "./services/theme";

// Routing.
import { RouterProvider } from 'react-router-dom';
import router from "./services/router";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>
)
