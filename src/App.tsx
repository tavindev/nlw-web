import React, { useState } from 'react';

import { AppContextInterface, AppContextProvider } from './utils/context';

import usePersistedState from "./utils/usePersistedState"

import Routes from "./routes"
import styled, { ThemeProvider } from 'styled-components'

import { LIGHT_THEME, DARK_THEME } from "./assets/styles/themes"

import './assets/styles/global.css'

const Wrapper = styled.div`
  --color-background: ${props => props.theme.background};
  --color-primary-lighter: ${props => props.theme.primary_lighter};
  --color-primary-light: ${props => props.theme.primary_light};
  --color-primary: ${props => props.theme.primary};
  --color-primary-dark: ${props => props.theme.primary_dark};
  --color-primary-darker: ${props => props.theme.primary_darker};
  --color-secundary: ${props => props.theme.secundary};
  --color-secundary-dark: ${props => props.theme.secundary_dark};
  --color-title-in-primary: ${props => props.theme.title_in_primary};
  --color-text-in-primary: ${props => props.theme.text_in_primary};
  --color-text-title: ${props => props.theme.text_title};
  --color-text-complement: ${props => props.theme.text_complement};
  --color-text-base: ${props => props.theme.text_base};
  --color-line-in-white: ${props => props.theme.line_in_white};
  --color-input-background: ${props => props.theme.input_background};
  --color-button-text: ${props => props.theme.button_text};
  --color-box-base: ${props => props.theme.box_base};
  --color-box-footer: ${props => props.theme.box_footer};

  height: 100vh;
  width: 100vw;
`

function App() {
  const [isOn, setIsOn] = usePersistedState('isOn', false)

  const ctx: AppContextInterface = {
    isOn,
    setIsOn
  }

  return (
    <ThemeProvider theme={isOn ? LIGHT_THEME : DARK_THEME} >
      <Wrapper>
        <AppContextProvider value={ctx}>
          <Routes />
        </AppContextProvider>
      </Wrapper>
    </ThemeProvider >
  )
}


export default App;
