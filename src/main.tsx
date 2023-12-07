import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './styles.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { theme } from './theme/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider theme={theme} >
        <Provider store={store}>
          <App />
        </Provider>
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
