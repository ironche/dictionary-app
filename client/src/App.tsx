import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import SearchForm from './search-form'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchForm />
    </ThemeProvider>
  )
}

export default App
