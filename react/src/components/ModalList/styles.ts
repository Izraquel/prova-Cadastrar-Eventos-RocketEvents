import styled from 'styled-components'
//import { darken } from 'polished'

export const Container = styled.form`
     h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        width: 100%;
        padding: 0 1rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        margin-top: 1.5rem;
        background: var(--background);
        color: #FFF;
        border: 0;
        font-size: 1rem;
        border-radius: 0.25rem;
        font-weight: 600;

        transition: 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

    
`
export const TransactionTypeContainer = styled.div`
   

`