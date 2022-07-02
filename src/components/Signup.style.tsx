import styled from 'styled-components'

export const FormContainer = styled.form`
    margin: 0 16px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
    > label {
        > div {
            margin-right: 8px;
        }
    }
`

export const LabelTest = styled.label`
    > span {
        color: blue;
    }
`
