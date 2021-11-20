import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: white;
      font-weight: 400;
      padding: 1rem 2rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
    }
  }
`;

export const Acao = styled.div`
  color: #fff;
  display: flex;
  justify-content: end;

  a {
    text-decoration: none;
    display: flex;
    justify-content: end;
    margin-right: 10px;
    margin-left: 10px;
  }

  .apagar,
  a {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;
    background: var(--background);
    color: #fff;
    border: 0;
    font-size: 1rem;
    border-radius: 0.25rem;
    font-weight: 600;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .buttonLike,
  .buttonDislike {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
