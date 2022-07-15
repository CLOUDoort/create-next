const PwInput = (props) => {
    const { handleChange } = props
    return (
        <>
            <p>비밀번호</p>
            <input name='pw' type='password' onClick={handleChange} placeholder='비밀번호 작성' required maxLength={15} />
        </>
    )
}

export default PwInput
