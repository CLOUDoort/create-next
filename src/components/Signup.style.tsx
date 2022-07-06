import styled from 'styled-components'

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
    > label {
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
    }
`

export const SignBtn = styled.input`
    background-color: green;
    color: white;
`

// import styled from 'styled-components'

// export const FormContainer = styled.form`
//     margin: 0 16px;
//     padding: 8px;
//     border-radius: 8px;
//     border: 1px solid #ccc;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
//     > label {
//         > div {
//             margin-right: 8px;
//         }
//     }
// `

// export const LabelTet = styled.label`
//     > span {
//         color: blue;
//     }
// `
