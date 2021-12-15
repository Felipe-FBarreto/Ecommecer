import { NextPage } from "next";
import Header from "../components/Header";
import * as C from '../styles/finalizar.styles'


const Finalizar: NextPage = ()=>{
  return(
    <div>
    <Header/>
    <C.SectionBg>
      
    <C.Container>
      <C.SubTitle>
        Finalizar Pedido
      </C.SubTitle>
      <C.Span>Home .</C.Span>
      <C.Span>Pages</C.Span>
      <C.Span2>. Pedido completo</C.Span2>
    </C.Container>
  </C.SectionBg>

  <C.SectionFinalizado>
        
        <C.Relogio src="/imgs/relogio.png" alt="" ></C.Relogio>

        <C.Description>

          <img src="/imgs/checado.png"/>
          <C.SubTitle2>
              Seu pedido está quase finalizado!
          </C.SubTitle2>
          <C.Paragrafo>Para finalizar o seu pedido, é necessário que você esteja autenticado.</C.Paragrafo>
          <C.Login>Fazer Login</C.Login>
        </C.Description>
      
  </C.SectionFinalizado>


  <C.Redes>
      <C.FooterContainer>
      <C.FooterP>
         © ProDevs - All Rights Reserved
      </C.FooterP>
      <div>
       <C.FooterImg src='/imgs/face.png'/>
       <a target="_blank" href='https://www.instagram.com/beprodevs/'>
         <C.FooterImg  src='/imgs/insta.png'/>
       </a>
       <C.FooterImg src='/imgs/twtter.png'/>
       </div>
       </C.FooterContainer>
    </C.Redes>

  </div>
  )
}


export default Finalizar