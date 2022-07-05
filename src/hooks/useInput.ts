import { useState } from 'react'
import { ChangeEvent } from 'react'

const useInput = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        // name을 key값으로 쓰겠다는 객체문법
        // 동적인 key값 설정
    }
    return [values, onChange]
    // 객체로 반환하든 배열로 반환하든 상관없음, 그 대신 받는 곳과 형태가 같아야 함
}

export default useInput
