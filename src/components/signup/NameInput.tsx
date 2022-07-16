import { LabelContainer } from './Signup.style'

const NameInput = (props) => {
    const { handleChange } = props

    return (
        <>
            <LabelContainer>
                <p>이름</p>
                <input name='name' type='text' onChange={handleChange} required maxLength={10} placeholder='이름 작성' />
            </LabelContainer>
        </>
    )
}

export default NameInput

// <label>
// <p>아이디</p>
// <input name='id' type='text' onChange={handleChange} required maxLength={15} placeholder='아이디 작성' />
// </label>
