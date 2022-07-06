import { toast } from 'react-toastify'
import useInput from '../hooks/useInput'
import { FormContainer, SignBtn } from './Signup.style'

const Signup = (props) => {
    const [values, setValues] = useInput({
        id: '',
        pw: '',
        name: '',
        birth: '',
        email: '',
        CP: '',
    })

    const login = (e) => {
        e.preventDefault()
        toast(`Hello, ${values.name}`)
    }

    return (
        <>
            <FormContainer onSubmit={login}>
                <p>
                    <a href='/'>OORT</a>
                </p>
                <label>
                    <p>아이디</p>
                    <input name='id' type='text' onChange={setValues} required maxLength={15} placeholder='아이디 작성' />
                </label>
                <label>
                    <p>비밀번호</p>
                    <input name='pw' type='password' onChange={setValues} required maxLength={15} placeholder='비밀번호 작성' />
                </label>
                <label>
                    <p>이름</p>
                    <input name='name' type='text' onChange={setValues} required maxLength={10} placeholder='이름 작성' />
                </label>
                <label>
                    <p>생년월일</p>
                    <input name='birth' type='number' onChange={setValues} required maxLength={8} placeholder='생년월일 작성' />
                </label>
                <label>
                    <p>이메일</p>
                    <input name='email' type='email' onChange={setValues} required maxLength={20} placeholder='이메일 작성' />
                </label>
                <label>
                    <p>휴대전화</p>
                    <input name='CP' type='tel' onChange={setValues} required maxLength={11} placeholder='휴대전화 번호 작성' />
                </label>
                <label>
                    <SignBtn type='submit' value='가입하기' />
                </label>
            </FormContainer>
        </>
    )
}

export default Signup
