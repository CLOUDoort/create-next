import { LabelContainer } from './Signup.style'

const BirthInput = (props) => {
    const { handleChange } = props

    return (
        <>
            <LabelContainer>
                <p>생년월일</p>
                <input name='birth' type='date' onChange={handleChange} required maxLength={20} placeholder='생년월일 작성' />
            </LabelContainer>
        </>
    )
}

export default BirthInput

// <label>
// <p>아이디</p>
// <input name='id' type='text' onChange={handleChange} required maxLength={15} placeholder='아이디 작성' />
// </label>
