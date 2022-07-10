import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'

const Userlist = () => {
    const [user, setData] = useState([])
    useEffect(() => {
        const apiRequest = async () => {
            const response = await apiInstance.get('/userInfo')
            setData(response.data)
        }
        apiRequest()
    }, [])

    return (
        <>
            {user.map((item) => (
                <div key={item.id}>
                    <p>id: {item.id}</p>
                    <p>name: {item.name}</p>
                    <p>email: {item.email}</p>
                </div>
            ))}
        </>
    )
}

export default Userlist
