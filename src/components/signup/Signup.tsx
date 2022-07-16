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
        e.preventDefault()
        const { name, value } = e.target
        console.log(name, value)
        setValues({ ...values, [name]: value })
    }

    const login = async (e) => {
        e.preventDefault()
        toast.done(`Hello, ${values.name}`)
        // const payload = e.currentTarget
        // console.log(payload.email.value)
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
                <IdInput handleChange={handleChange} />
                <PwInput handleChange={handleChange} />
                <NameInput handleChange={handleChange} />
                <BirthInput handleChange={handleChange} />
                <EmailInput handleChange={handleChange} />
                <TelInput handleChange={handleChange} />
                <SubmitLabel>
                    <input type='submit' value='가입하기' />
                </SubmitLabel>
            </FormContainer>
        </>
    )
}
// props 넘겨줄 때, 이름 조심

export default Signup
