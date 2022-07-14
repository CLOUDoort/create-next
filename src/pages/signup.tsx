import Head from 'next/head'
import Signup from '../components/signup/Signup'
import * as React from 'react'
import { Reset } from 'styled-reset'

const signup = () => {
    return (
        <>
            <Head>
                <title>OORT 회원가입</title>
            </Head>
            <Signup />
        </>
    )
}

export default signup
