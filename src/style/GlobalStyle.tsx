import { Global, css } from '@emotion/react'

export const GlobalStyle = () => {
    return (
        <Global
            styles={css`
                * {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    text-decoration: none;
                }
                html,
                body {
                    height: 100%;
                    width: 100;
                    box-sizing: border-box;
                }
            `}
        />
    )
}
