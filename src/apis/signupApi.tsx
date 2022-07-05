import { useEffect } from 'react'
import { apiInstance } from './setting'

const Signapi = () => {
    useEffect(() => {
        const apiRequest = async () => {
            await apiInstance.post('/signup', {})
        }
        apiRequest()
    }, [])
}

export default Signapi
