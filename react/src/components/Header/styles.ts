import styled from "styled-components";

export const Container = styled.header`
   background: var(--cinza);
`

export const Content = styled.div`
   // background: var(--background);

    max-width: 1120px;
    margin: 0 auto;
    padding: 0.80rem; //12.8px
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
    font-size: 1rem;
    color: #FFFFFF;
    background: var(--background);

    width: 195px;
    height: 3rem; //3rem = 48px 
    padding: 0 2rem;

    border: 0;
    border-radius: 5px;

    transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

    }

    img {
       max-width: 60px;
       border-radius: 12px;
    }
`