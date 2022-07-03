import { useState } from 'react'

const Newbanana = (props) => {
    const { color, fruit } = props

    // declare variables, 불러올 것이 많으므로 객체로 리턴
    const [id, setID] = useState('')
    const [pw, setPW] = useState('')

    // event handler
    const login = (e) => {
        e.preventDefault()
    }

    const changeID = (e) => {
        e.preventDeafault()
        setID(e.target.value)
    }
    const changePW = (e) => {
        e.preventDeafault()
        setPW(e.target.value)
    }

    return (
        <>
            <form onSubmit={login}>
                <label>
                    <input name='id' type='text' value={id} onChange={changeID} placeholder='write your ID' required />
                </label>
                <label>
                    <input name='pw' type='password' value={pw} onChange={changePW} placeholder='write your PW' required />
                </label>
            </form>
            <input type='submit' />
        </>
    )
}

export default Newbanana
