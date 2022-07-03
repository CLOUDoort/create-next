import { useState } from 'react'

const Apple = (props) => {
    // 매개변수
    const { color, fruit } = props

    const [count, setCount] = useState(0)
    // [변수, 함수(변화를 알리고 다음 값을 지장하는 함수)]

    // 이벤트 핸들러
    const handleClick = (e) => {
        e.preventDefault()
        setCount(count + 1)
        // 함수(다음 값)
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>test</button>
        </>
    )
}

export default Apple
