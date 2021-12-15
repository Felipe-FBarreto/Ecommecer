import styled from "styled-components";

export const SectionBg = styled.section`
    background-color: #7E33E0;
`;

export const Container = styled.div `
  max-width: 860px;
  margin: 0 auto;
  padding: .5rem;
  position: relative;
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContatoDados = styled.div`
  display: flex;
  align-items: center;
`;

export const Dados = styled.p `
  color: #fff;
  font-size: 1rem;
  margin: 0 2rem 0 .5rem;
  cursor: pointer;
`;
export const Logo = styled.span`
  font-size: 2rem;
  color: #0D0E43; 
  margin-right: 2rem;
  font-weight: bold;
`;

export const HomeNav = styled.span`
  font-size: 1rem;
  color: #FB2E86;
  margin-right: 1.5rem;
  cursor: pointer;
`;
export const ProdutoNav = styled.span`
  font-size: 1rem;
  color: #0D0E43;
  margin-right: 1.5rem;
  cursor: pointer;
`;

export const Pesquisa = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1rem;
`;
export const Pesq = styled.input`
  width: 200px;
  padding: 0.5rem 0 ;
  outline: none;
  border: 1px solid #E7E6EF; 
`;
export const Lupa = styled.div`
  background-color: #FB2E86;
  padding: .160rem;
  cursor: pointer;
`;

export const Carrinho = styled.img`
  cursor: pointer;
`

export const Total = styled.span`
  background:#FB2E86 ;
  color: #fff;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  text-align:center;
  border-radius:50%;
  margin-left:5px ;
`;