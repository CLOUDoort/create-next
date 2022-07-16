import { LabelContainer } from './Signup.style'

const IdInput = (props) => {
    const { handleChange } = props

    return (
        <>
            <LabelContainer>
                <p>아이디</p>
                <input name='id' type='text' onChange={handleChange} required maxLength={15} placeholder='아이디 작성' />
            </LabelContainer>
        </>
    )
}

export default IdInput
