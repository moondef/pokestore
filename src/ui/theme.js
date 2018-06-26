const css = String.raw

export const color = {
  primary: '#ff6600',

  background: '#fff',

  text: '#262626',
  textLight: '#999',

  border: '#efefef',
  borderDark: '#e6e6e6'
}

export const globalStyles = css`
  html, body {
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: #003569;
  }

  a:visited, a:focus, a:active {
    color: #003569;
  }

  * {
    box-sizing: border-box;
  }
`
