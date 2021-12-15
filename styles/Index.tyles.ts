import styled from "styled-components";

export const SectionIntro = styled.section`
  background-color: #F2F0FF;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const Lustre = styled.img`
  width: 21%;
  height: 20%;
`;

export const ContainerFlex = styled.div`
  display: flex;
`;

export const Mobilia = styled.p`
  font-size: 1rem;
  color: #FB2E86;
`;

export const CompreIntro = styled.div`
  max-width: 40%;
  margin-top: 100px;
`;
export const Colecao = styled.h1 `
  font-size: 2.5rem;
  color: #000;
`;
export const DescricaoItem = styled.p`
  font-size: 1rem;
  color: #8A8FB9;
  margin: 1rem 1rem 0 0;
`;
export const Comprar = styled.button`
  background-color: #FB2E86;
  padding: .5rem 2rem;
  color: #fff;
  border: 0;
  margin-top: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
export const Desconto = styled.img`
  width: 40%;
  margin-top: 20px;
`;
export const PageNav = styled.img`
  margin: 30px auto;
  cursor: pointer;
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  color: #1A0B5B;
  text-align: center;
  margin-top: 40px;
`;

export const ProdutosDestaques = styled.section`
  max-width:960px;
  margin: 0 auto;
`;

export const Destaque = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;  
`;
export const Item = styled.img`
  width: 25%;
`;

export const Servico = styled.ul`
  margin: 60px 0;
`;
export const ServicoList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;
export const ServicoItem = styled.li`
    padding: 2.5rem .5rem;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 1px 1px 5px 4px rgba(0,0,0,0.1);
    margin-right: 1rem;
`;

export const Support = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #1A0B5B;
  margin: 1rem 0 ;
`;

export const SupportDescription = styled.p`
  color: #BAB6CE;
  align-items: center;
`;

export const Caracteristica = styled.section`
  background-color: #F1F0FF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CaractTitle = styled.h2`
  font-size: 2.5rem;
  color: #1A0B5B;
  text-align: left; 
`;

export const Supportpara = styled.p`
  color: #acacaf;
  margin-top:1rem;
  &::before{
    content: '';
    width: 8px;
    height: 8px;
    display: inline-flex;
    margin-right: 15px;
    background-color: #F52B70;
    border-radius: 50%;
  }
`;
export const Supportpara1 = styled.p`
  color: #acacaf;
  margin-top:1rem;
  &::before{
    content: '';
    width: 8px;
    height: 8px;
    display: inline-flex;
    margin-right: 15px;
    background-color: #2B2BF5;
    border-radius: 50%;
  }
`;
export const Supportpara2 = styled.p`
  color: #acacaf;
  margin-top:1rem;
  &::before{
    content: '';
    width: 8px;
    height: 8px;
    display: inline-flex;
    margin-right: 15px;
    background-color: #2BF5CC;
    border-radius: 50%;
  }
`;

export const DescontoItem = styled.section`
  padding: .5rem 3rem;
  max-width: 990px ;
  margin: 0 auto;
  text-align: center;
`;

export const DescontoDiv = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
`;

export const Wood = styled.span`
  color: #F52B70;
  border-bottom:1px solid #F52B70;
  margin: 1rem 1rem 1rem 0;
  display: inline-block;
`;

export const Span = styled.span`
  color:#2B2BF5 ;
  margin: 1rem 1rem 1rem 0;
  display: inline-block;  
`;

export const Porcentagem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  width: 70%;
`;
export const Compact = styled.span`
  color: #F52B70;
  font-size: 1.5rem;
  margin: 1rem  0;
`;

export const DescontDescrip = styled.p`
  color: #858689;
  margin: 1rem 0;
`;
export const DescontList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemList = styled.li`
  color: #858689;
  margin: .5rem  0;
  flex:  1 1 50%;
`;

export const Sofa3 = styled.img`
  width: 50%;
`;

export const CallToAction = styled.div`
  background: url('/imgs/bg-footer.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  padding: 80px 0;
  text-align: center;
  margin-top: 40px;
`;

export const Redes = styled.footer`
  background-color: #E7E4F8;
 
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