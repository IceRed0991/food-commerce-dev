import styled from "styled-components";



export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.red};

  width: 7.75rem; //  largura do sidebar
  padding: 2rem 0; // espaço cima/baixo dentro do sidebar / 0 lateral
  overflow: hidden;// sem barras de rolagem

  display: flex;
  flex-direction: column;
  align-items: center;

`
