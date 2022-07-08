import { DivContainer } from '../components/Index.style'

const index = () => {
    return (
        <>
            <DivContainer>
                <h1>
                    <a href='./'>OORT</a>
                </h1>
                <div>
                    <a href='signup'>회원가입</a>
                </div>
                <div>
                    <a href='userInfo'>유저 정보</a>
                </div>
            </DivContainer>
        </>
    )
}

export default index
