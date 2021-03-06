import type { AppProps } from 'next/app'
import * as React from 'react'
import { Reset } from 'styled-reset'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import { GlobalStyle } from '../style/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
            </Head>
            <Reset />
            <GlobalStyle />
            <Component {...pageProps} />
            <ToastContainer />
        </>
    )
}

export default MyApp
