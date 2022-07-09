import Head from 'next/head'
import Link from 'next/link'
import { DivContainer } from '../components/Index.style'

const index = () => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
            </Head>
            <DivContainer>
                <h1>
                    <Link href='./'>OORT</Link>
                </h1>
                <div>
                    <Link href='signup'>회원가입</Link>
                </div>
                <div>
                    <Link href='userInfo'>유저 정보</Link>
                </div>
            </DivContainer>
        </>
    )
}

export default index
