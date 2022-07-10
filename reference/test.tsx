import { useEffect, useState } from 'react'
import { apiInstance } from '../src/apis/setting'

const Test = () => {
    const [message, setMessage] = useState('')
    // Get method
    useEffect(() => {
        const apiRequest = async () => {
            const response = await apiInstance.get('/basket/cherry') // baseURL + /
            // const response - await axios.get('https://fv3p699st7.execute-api.ap-northeast-2.amazonaws.com/development')
            setMessage(response.data.body.message)
        }
        apiRequest()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        await apiInstance.post('/basket/signup', { count: 1 })
    }
    return (
        <>
            <p>test</p>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' />
                <input type='submit' />
            </form>
        </>
    )
}

export default Test
