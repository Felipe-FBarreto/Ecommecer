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
  margin: 3rem  0;
  text-align:left;
`;

export const Span = styled.span`
  color:#000;
  margin-right: .8rem;
`;
export const Span2 = styled.span`
  color:#FB2E86;
`;


export const ContainerItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items:center;
  padding: 1rem;
  box-shadow:6px 4px 20px -2px #454441;
  margin-bottom:60px;
  position:relative; 
`;

export const DetalhesProduto = styled.div`

`;

export const ImgProduto = styled.img`
  width: 20%;
  margin-right:1rem;
  box-shadow:6px 4px 20px -2px #454441;

`;

export const DesctptionTitle = styled.h2`
  color:#111C85;
  font-size:1rem;
  max-width:200px;
  margin-bottom:.5rem;
  margin-right:1rem;
`;
export const PrecoPromocao = styled.span`
  color:#111C85;
  font-weight:bold;
  margin-right:1rem;
`;

export const PrecoAtual = styled.span`
  color:#FF2AAA;
  margin-right:1rem;
  font-weight:bold;
  text-decoration: line-through;
`;
export const Description = styled.p`
  color: #9295AA;
  font-size:.8rem;
  margin-top:.5rem;
`;

export const CarrinhoImg = styled.img`
background-color:#fff;
 cursor:pointer;
 margin:.5rem 1rem 0 0;
`;
export const SubTitle2 = styled.h2`
  font-size: 2.5rem;
  color: #1A0B5B;
  margin: 3rem  0;
  text-align:center;
`;

export const SectionCar = styled.section`
  display: flex;
  padding: 3rem 1rem;
`;
export const ContainerProduto= styled.div`
 width: 100%;
 display: flex;
`;

export const SpanProduto = styled.span`
  color:#1A0B5B;
  font-size:1.5rem;
  font-weight:bold;
  margin: 1rem 18.5rem 1rem 1.5rem;
  display: inline-block;
`;

export const SpanPreco = styled.span`
  color:#1A0B5B;
  font-size:1.5rem;
  font-weight:bold;
  margin-right:2rem;  
`;
export const SpanQuantidade = styled.span`
color:#1A0B5B;
font-size:1.5rem;
font-weight:bold;

`;
export const SpanTotal = styled.span`
  color:#1A0B5B;
  font-size:1.5rem;
  font-weight:bold;
  margin-left:4rem ;
`;

export const Somar = styled.button`
  width: 1rem;
  height:1rem;
  background: black;
  color: #fff;
  border: none;
`;
export const Subtrair = styled.button`
  width: 1rem;
  height:1rem;
  background: black;
  color: #fff;
  border: none;

`;
export const Quantidade = styled.span`
  padding: .3rem;
`;
export const Qntd = styled.div`
  margin: 0 6.5rem 0 3.5rem;
  display: inline;
`;

export const Excluir = styled.button`
  border: none;
  color: #fff;
  background: #000;
  border-radius:50%;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top:0;
  left:0;
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

export const TotalFrete = styled.div`
  margin-left:4rem;
  display: flex;
  flex-direction:column;
  align-items:center;
`;

export const SubCarrinho = styled.h2`
  color: #1A0B5B;
  font-size:2rem;
  margin-bottom:2rem ;
`;

export const TotalValor = styled.h2`
  font-size:1.5rem;
  color: #1A0B5B;
`;

export const Total = styled.div`
  background: #F4F4FC ;
  padding: 2rem 1rem;
  display: flex;
  flex-direction:column;
  width: 400px;
`;

export const SubTotal = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-bottom:1px solid ;
  margin-bottom:2rem;
  padding-bottom:1rem ;
`;

export const Frete = styled.p`
  color: #8A91AB;
  font-size:1.5rem;
`;

export const Comprar = styled.button`
  background: #19D16F;
  color: #fff;
  padding: 1rem 6.4rem;
  border: none;
  font-size:1.75rem;
  margin-top:2rem;
  cursor: pointer;
`;

export const LimparCarrinho = styled.button`
  background: #FB2E86;
  color: #fff;
  padding: 1rem 4rem;
  border: none;
  font-size:1.5rem;
  cursor: pointer;
`;