import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global'
import Content from './Content'
import { HeadingContainer } from './styles/App.styled'

const theme = {
  colors: {
    // dark shades of primary color
    primary5: 'hsl(21, 62%, 45%)',
    // darkest grey - used for headings
    grey1: 'hsl(209, 61%, 16%)',
    grey3: 'hsl(209, 34%, 30%)',
    // grey used for paragraphs
    grey5: 'hsl(210, 22%, 49%)',
    grey8: 'hsl(210, 31%, 80%)',
    grey10: 'hsl(210, 36%, 96%)',
  },
  shadow: {
    light: '0 5px 15px rgba(0, 0, 0, 0.1)',
    dark: '0 5px 15px rgba(0, 0, 0, 0.2)',
  },
  transition: 'all 0.3s linear',
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <HeadingContainer>
          <span>/</span>
          <h1>Reviews</h1>
        </HeadingContainer>
        <Content />
      </>
    </ThemeProvider>
  )
}
