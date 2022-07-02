import { useState } from "react"

const Apple = (props) => {
  // 매개변수
  const { color, fruit } = props

  // 변수
  //   let count = 0
  const [count, setCount] = useState(0) // 0은 초기값 지정

  // 이벤트 핸들러
  const handlerClick = (e) => {
    e.preventDefault()
    setCount(count + 1)
  }

  return (
    <>
      <p>Apple</p>
      <p>{count}</p>
      <button onClick={handlerClick}>test</button>
    </>
  )
}

export default Apple
