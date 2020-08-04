import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string,
    primary_lighter: string,
    primary_light: string,
    primary: string,
    primary_dark: string,
    primary_darker: string,
    secundary: string,
    secundary_dark: string,
    title_in_primary: string,
    text_in_primary: string,
    text_title: string,
    text_complement: string,
    text_base: string,
    line_in_white: string,
    input_background: string,
    button_text: string,
    box_base: string,
    box_footer: string,
  }
}
