import { LabelContainer } from './Signup.style'

const EmailInput = (props) => {
    const { handleChange } = props

    return (
        <>
            <LabelContainer>
                <p>이메일</p>
                <input name='email' type='tel' onChange={handleChange} required maxLength={20} placeholder='이메일 작성' />
            </LabelContainer>
        </>
    )
}

export default EmailInput
