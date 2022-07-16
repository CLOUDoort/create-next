import { toast } from 'react-toastify'
import { FormContainer, SubmitLabel } from './Signup.style'
import { apiInstance } from '../../apis/setting'
import { useState } from 'react'
import Link from 'next/link'
import IdInput from './IdInput'
import PwInput from './PwInput'
import NameInput from './NameInput'
import BirthInput from './BirthInput'
import EmailInput from './EmailInput'
import TelInput from './TelInput'

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
                <NameInput onChange={handleChange} />
                <BirthInput onChange={handleChange} />
                <EmailInput onChange={handleChange} />
                <TelInput onChange={handleChange} />
                <SubmitLabel>
                    <input type='submit' value='가입하기' />
                </SubmitLabel>
            </FormContainer>
        </>
    )
}

export default Signup
