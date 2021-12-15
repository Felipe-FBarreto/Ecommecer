import styled from "styled-components";


export const SectionBg = styled.section`
  background-color: #F6F5FF;
  padding: 40px 0 60px 0;
`;

export const Container = styled.div`
 max-width: 860px;
 margin: 0 auto;
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  color: #1A0B5B;
  margin-bottom: 1.5rem;
`;

export const Span = styled.span`
  color:#000;
  margin-right: .8rem;
`;
export const SpanProdutos = styled.span`
  color:#FB2E86;
`;

export const SectionBgNatal = styled.section`
  background-color: #F6F5FF;
  padding-bottom:1rem ;
`;
export const Natalina = styled.h1`
  color: #ff0000;
  font-size: 3rem;
  text-align: left;
  padding-left: 1.4rem;
  margin-bottom: 1rem;
  position: relative;
  &::before{
    content: '';
    width: 60px;
    height: 60px;
    background-image: url('/imgs/Toca.png');
    background-position: center;
    background-size: cover;
    z-index: 10;
    position: absolute;
    left: 0;
    bottom: 0;    
  }
`;

export const Produtos = styled.section`
  max-width: 860px;
`;

export const Redes = styled.footer`
  background-color: #E7E4F8;
  margin-top:2rem;
 
`;
export const FooterContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 990px;
  margin:0 auto;
`;
export const FooterP = styled.p`
  color:#9DA0AE;
`;
export const FooterImg = styled.img`
  margin-right: 1rem;
  cursor: pointer;
`;


