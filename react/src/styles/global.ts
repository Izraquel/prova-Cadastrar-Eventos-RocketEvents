import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #121214;
    --cinza: #29292E;
    --text-body: #969cb3;
    --text-title: #363f5f;


}

* {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
}

body {
    color: #e1e1e6;
    //background: #121214;

    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

button {
    cursor:pointer;
}

.react-modal-overlay {

    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--cinza);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
}

`;
