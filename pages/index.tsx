import React from 'react'
// import axios from 'axios'
import type { NextPage } from 'next'
import Header from '../components/Header'
import * as I from "../styles/Index.tyles"
import image from 'next/image'
import Link from 'next/link'


const Home: NextPage = () => {

  return (
    <div>
      <Header/>
      <I.SectionIntro>
          <I.ContainerFlex>
        <I.Lustre src='/imgs/lustre.png'>
        </I.Lustre>
            <I.CompreIntro>
          <I.Mobilia>
            A melhor mobília para sua casa...
          </I.Mobilia>
          <I.Colecao>
            Nova coleção de <br/>
            Móveis 2022
          </I.Colecao>
          <I.DescricaoItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Magna in est adipiscing in phasellus non in justo.
          </I.DescricaoItem>
          <Link href ='/produtos'>
          <I.Comprar>
            Comprar
          </I.Comprar>
          </Link>
          </I.CompreIntro>
          <I.Desconto src="/imgs/sofa.png" alt="sofa"> 
          </I.Desconto>
          </I.ContainerFlex>
          <I.PageNav src='/imgs/next.png'>
          </I.PageNav>
      </I.SectionIntro>

      <I.ProdutosDestaques>
        <I.SubTitle>
          Destaques
        </I.SubTitle>
        <I.Destaque>
          <I.Item src="imgs/cadeira1.png" alt="item" ></I.Item>
          <I.Item src="imgs/cadeira3.png" alt="item" ></I.Item>
          <I.Item src="imgs/cadeira2.png" alt="item" ></I.Item>
          <I.Item src="imgs/cadeira4.png" alt="item" ></I.Item>  
        </I.Destaque>

        <I.Servico>
          <I.SubTitle>
            O que ofereçemos
          </I.SubTitle>
        <I.ServicoList>
            <I.ServicoItem>
              <img src="imgs/car.png" alt="car" />
              <I.Support>24/7 Support</I.Support>
              <I.SupportDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</I.SupportDescription>
            </I.ServicoItem>
            <I.ServicoItem>
              <img src="imgs/moeda.png" alt="car" />
              <I.Support>24/7 Support</I.Support>
              <I.SupportDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</I.SupportDescription>
            </I.ServicoItem>  <I.ServicoItem>
              <img src="imgs/medalha.png" alt="car" />
              <I.Support>24/7 Support</I.Support>
              <I.SupportDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</I.SupportDescription>
            </I.ServicoItem>  <I.ServicoItem>
              <img src="imgs/telefone.png" alt="car" />
              <I.Support>24/7 Support</I.Support>
              <I.SupportDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</I.SupportDescription>
            </I.ServicoItem>
          </I.ServicoList>
        </I.Servico>
      </I.ProdutosDestaques>

      <I.Caracteristica>
        <img src="/imgs/sofa1.png" alt="sofa" />
        <div>
          <I.CaractTitle>
               Características exclusivas de <br/> nossos produtos
          </I.CaractTitle>
          <I.Supportpara>
               All frames constructed with hardwood solids and laminates
          </I.Supportpara>
          <I.Supportpara1>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
          </I.Supportpara1>
          <I.Supportpara2>
             Arms, backs and seats are structurally reinforced
          </I.Supportpara2>
          <Link href ='/produtos'>
          <I.Comprar>
            Comprar
          </I.Comprar>
          </Link>
        </div>
      </I.Caracteristica>

      <I.DescontoItem>
        <I.SubTitle>
            Discount Item
        </I.SubTitle>
        <I.Wood>
            Wood Char .
        </I.Wood>
        <I.Span>
          Plastic Chair
        </I.Span>
        <I.Span>
           Sofa Colletion
        </I.Span>

        <I.DescontoDiv>
          <I.Porcentagem>
            <I.SubTitle>
              20% de desconto
            </I.SubTitle>
            <I.Compact>
              Eams Sofa Compact
            </I.Compact>
            <I.DescontDescrip>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget<br/> feugiat habitasse nec, bibendum condimentum. 
            </I.DescontDescrip>
            <I.DescontList>
            <I.ItemList>
               ✔ Material expose like metals
            </I.ItemList>
            <I.ItemList>
               ✔ Clear lines and geomatric figures
            </I.ItemList>
            <I.ItemList>
               ✔ Simple neutral colours.
            </I.ItemList>
            <I.ItemList>
               ✔ Material expose like metals
            </I.ItemList>
          </I.DescontList>
          <Link href ='/produtos'>
          <I.Comprar>
            Comprar
          </I.Comprar>
          </Link>
          </I.Porcentagem>
          <I.Sofa3 src="/imgs/sofa3.png" alt="sofa" />
        </I.DescontoDiv>
      </I.DescontoItem>

    <I.CallToAction>
    <I.SubTitle>
    Get Leatest Update By Subscribe <br/>0ur Newslater
    </I.SubTitle>
    <Link href ='/produtos'>
          <I.Comprar>
            Shop Now
          </I.Comprar>
          </Link>
    </I.CallToAction>

    <I.Redes>
      <I.FooterContainer>
      <I.FooterP>
         © ProDevs - All Rights Reserved
      </I.FooterP>
      <div>
       <I.FooterImg src='/imgs/face.png'/>
       <a target="_blank" href='https://www.instagram.com/beprodevs/'>
         <I.FooterImg  src='/imgs/insta.png'/>
       </a>
       <I.FooterImg src='/imgs/twtter.png'/>
       </div>
       </I.FooterContainer>
    </I.Redes>
    </div>
    
  )
}

export function getStaticProps() {
  return {
      props: {}
  }
}

export default Home
