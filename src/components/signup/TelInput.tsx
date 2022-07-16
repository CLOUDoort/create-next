import { LabelContainer } from './Signup.style'

const TelInput = (props) => {
    const { handleChange } = props

    return (
        <>
            <LabelContainer>
                <p>휴대전화</p>
                <input name='tel' type='text' onChange={handleChange} required maxLength={15} placeholder='휴대전화 번호 작성' />
            </LabelContainer>
        </>
    )
}

export default TelInput
