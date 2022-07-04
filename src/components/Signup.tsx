import { toast } from 'react-toastify'
import useInput from '../hooks/useInput'
import { FormContainer } from './Signup.style'

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
                <p>OORT</p>
                <label>
                    <p>아이디</p>
                    <input name='id' type='text' onChange={setValues} required maxLength={10} />
                </label>
                <label>
                    <p>비밀번호</p>
                    <input name='pw' type='password' onChange={setValues} required maxLength={15} />
                </label>
                <label>
                    <p>이름</p>
                    <input name='name' type='text' onChange={setValues} required />
                </label>
                <label>
                    <p>생년월일</p>
                    <input name='birth' type='number' onChange={setValues} required maxLength={8} />
                </label>
                <label>
                    <p>이메일</p>
                    <input name='email' type='email' onChange={setValues} required maxLength={20} />
                </label>
                <label>
                    <p>휴대전화</p>
                    <input name='CP' type='number' onChange={setValues} required maxLength={11} />
                </label>
                <label>
                    <input type='submit' value='가입하기' />
                </label>
            </FormContainer>
        </>
    )
}

export default Signup
