import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import * as P from '../styles/produtos.styles'

const Produtos : NextPage = ()=>{
  return(
    <>
      <Header/>
      <P.SectionBg>
        <P.Container>
          <P.SubTitle>
            Produtos
          </P.SubTitle>
          <P.Span>Home →</P.Span>
          <P.Span>Pages →</P.Span>
          <P.SpanProdutos>Produtos</P.SpanProdutos>
        </P.Container>
      </P.SectionBg>
      
      <P.SectionBgNatal>
        <P.Container>
          <P.Natalina>
              Ofertas de Natal
          </P.Natalina>
        </P.Container>
      </P.SectionBgNatal>
      <P.Produtos>

        <ProductList/>

      </P.Produtos>
      <P.Redes>
      <P.FooterContainer>
      <P.FooterP>
         © ProDevs - All Rights Reserved
      </P.FooterP>
      <div>
       <P.FooterImg src='/imgs/face.png'/>
       <a target="_blank" href='https://www.instagram.com/beprodevs/'>
         <P.FooterImg  src='/imgs/insta.png'/>
       </a>
       <P.FooterImg src='/imgs/twtter.png'/>
       </div>
       </P.FooterContainer>
    </P.Redes>

    </>
  )
}

export default Produtos