import React from "react"
import { NextPage } from "next"
import CarrinhoProduct from "../components/CarrinhoProduct"
import { useGlobalContext } from "../components/GlobalContext"
import Header from "../components/Header"
import Link from 'next/link'




import * as C from '../styles/carrinho.styled'




const carrinho: NextPage = () => {

const produto = useGlobalContext()
  
React.useEffect(()=>{
  produto.removeCarrinho()
},[])

  return (
    <div>
     <Header/>
     <C.SectionBg>
      
       <C.Container>
         <C.SubTitle>
           Carrinho
         </C.SubTitle>
         <C.Span>Home .</C.Span>
         <C.Span>Pages</C.Span>
         <C.Span2>. Carrinho</C.Span2>
       </C.Container>
     </C.SectionBg>
     <C.SubTitle2>
         Seus Produtos
       </C.SubTitle2>
     <C.SectionCar>

   

      <C.ContainerProduto>
        <C.DetalhesProduto>
         <C.SpanProduto>Produto</C.SpanProduto>
         <C.SpanPreco>Preço</C.SpanPreco>
          <C.SpanQuantidade>Quantidade</C.SpanQuantidade>
          <C.SpanTotal>Total</C.SpanTotal>
          <CarrinhoProduct/>
          <C.LimparCarrinho onClick={()=> {produto.LimparCarrinho()}}>Limpar carrinho</C.LimparCarrinho>
        </C.DetalhesProduto>
        
        <C.TotalFrete>
          <C.SubCarrinho>Carrinho</C.SubCarrinho>
          <C.Total>
            <C.SubTotal>
              <C.TotalValor>SubTotal:</C.TotalValor>
              <C.TotalValor>R$ {produto.total}</C.TotalValor>
            </C.SubTotal>
            <C.SubTotal>
              <C.TotalValor>Total:</C.TotalValor>
              <C.TotalValor>R$ {produto.total}</C.TotalValor>
            </C.SubTotal>
            <C.Frete>Fretes grátis no mês de Natal</C.Frete>
          </C.Total>
          <Link href='/finalizar'>
            <C.Comprar>Finalizar pedido</C.Comprar>
          </Link>
        </C.TotalFrete>


      </C.ContainerProduto>

     </C.SectionCar>

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

export default carrinho
