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
            {user.map((userObj) => {
                return (
                    <>
                        <p>id: {userObj.id}</p>
                        <p>name: {userObj.name}</p>
                        <p>email: {userObj.email}</p>
                    </>
                )
            })}
        </>
    )
}

export default Userlist
