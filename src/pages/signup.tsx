import Head from 'next/head'
import Signup from '../components/Signup'
import * as React from 'react'
import { Reset } from 'styled-reset'

const signup = () => {
    return (
        <>
            <Reset />
            <Head>
                <meta charSet='utf-8' />
                <title>OORT 회원가입</title>
            </Head>
            <Signup />
        </>
    )
}

export default signup
