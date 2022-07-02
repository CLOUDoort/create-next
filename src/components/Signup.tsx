import { useState } from 'react'
import { FormContainer } from './Signup.style'
import { toast } from 'react-toastify'

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        id: '',
        pw: '',
        email: '',
    })

    const handlerSign = (e) => {
        e.preventDefault()
        toast(`Hello! ${name}`)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    return (
        <>
            <div>
                <h1>signup</h1>
            </div>
            <div>
                <FormContainer onSubmit={handlerSign}>
                    <label>
                        <div>
                            <span>NAME: </span>
                            <input name='name' type='text' value={values.name} placeholder='write name' onChange={handleChange} maxLength={15} />
                        </div>
                        <div>
                            <span>ID: </span>
                            <input name='id' type='text' value={values.id} placeholder='write ID' onChange={handleChange} maxLength={15} />
                            <span>PW: </span>
                            <input name='pw' type='password' value={values.pw} placeholder='write PW' onChange={handleChange} maxLength={15} />
                            <span>EMAIL: </span>
                            <input name='email' type='email' value={values.email} placeholder='write email' onChange={handleChange} />
                            <input type='submit' />
                        </div>
                    </label>
                </FormContainer>
            </div>
        </>
    )
}

export default Signup
