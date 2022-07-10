const IdInput = (props) => {
    const { handleChange } = props

    return (
        <>
            <p>아이디</p>
            <label>
                <input name='id' type='text' onChange={handleChange} required maxLength={15} placeholder='아이디 작성' />
            </label>
        </>
    )
}

export default IdInput

// <label>
// <p>아이디</p>
// <input name='id' type='text' onChange={handleChange} required maxLength={15} placeholder='아이디 작성' />
// </label>
