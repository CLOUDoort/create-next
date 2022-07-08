import Head from 'next/head'
import * as React from 'react'
import { Reset } from 'styled-reset'
import Userlist from '../components/Userlist'

const userInfo = () => {
    return (
        <>
            <Reset />
            <Head>
                <meta charSet='utf-8' />
                <title>OORT 유저 DB</title>
            </Head>
            <Userlist />
        </>
    )
}

export default userInfo
