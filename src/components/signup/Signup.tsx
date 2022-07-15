import { toast } from 'react-toastify'
import { FormContainer, SignBtn } from './Signup.style'
import { apiInstance } from '../../apis/setting'
import { useState } from 'react'
import Link from 'next/link'
import IdInput from './IdInput'
import PwInput from './PwInput'

const Signup = (props) => {
    const [values, setValues] = useState({
        id: '',
        pw: '',
        name: '',
        birth: '',
        email: '',
        tel: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const login = async (e) => {
        e.preventDefault()
        toast.done(`Hello, ${values.name}`)
        toast.error(`Hello, ${values.name}`)
        await apiInstance.post('/signup', {
            id: values.id,
            pw: values.pw,
            name: values.name,
            birth: values.birth,
            email: values.email,
            tel: values.tel,
        })
    }

    return (
        <>
            <FormContainer onSubmit={login}>
                <p>
                    <Link href='/'>SIGNIN</Link>
                </p>
                <IdInput onChange={handleChange} />
                <PwInput onChange={handleChange} />
                <label>
                    <p>이름</p>
                    <input name='name' type='text' onChange={handleChange} required maxLength={10} placeholder='이름 작성' />
                </label>
                <label>
                    <p>생년월일</p>
                    <input name='birth' type='date' onChange={handleChange} required maxLength={15} placeholder='생년월일 작성' />
                </label>
                <label>
                    <p>이메일</p>
                    <input name='email' type='email' onChange={handleChange} required maxLength={20} placeholder='이메일 작성' />
                </label>
                <label>
                    <p>휴대전화</p>
                    <input name='tel' type='tel' onChange={handleChange} required maxLength={11} placeholder='휴대전화 번호 작성' />
                </label>
                <label>
                    <SignBtn type='submit' value='가입하기' />
                </label>
            </FormContainer>
        </>
    )
}

export default Signup
