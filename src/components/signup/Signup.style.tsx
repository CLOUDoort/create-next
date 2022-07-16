import styled from '@emotion/styled'

export const FormContainer = styled.form`
    background-color: #f5f6f7;
    width: 100%;
    height: auto;
    min-height: 800px;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    > p {
        flex: 1;
        font-size: 50px;
        text-align: center;
        margin-top: 80px;
    }
`
export const LabelContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-top: 10px;
    > p {
        width: 300px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    > input {
        width: 300px;
        flex: 1;
        border: 2px solid black;
        border-radius: 5px;
        font-size: 20px;
    }
`

export const SubmitLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-top: 10px;
    > input {
        background-color: green;
        color: white;
        padding: 15px 115px;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        transition: opacity 0.3s;
    }
    > input:hover {
        opacity: 0.8;
    }
    > input:active {
        opacity: 0.5;
    }
`
