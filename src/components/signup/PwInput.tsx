import { LabelContainer } from './Signup.style'

const PwInput = (props) => {
    const { handleChange } = props
    return (
        <>
            <LabelContainer>
                <p>비밀번호</p>
                <input name='pw' type='password' onClick={handleChange} placeholder='비밀번호 작성' required maxLength={15} />
            </LabelContainer>
        </>
    )
}

export default PwInput
