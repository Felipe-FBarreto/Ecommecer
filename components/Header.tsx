import React, { ReactNode } from 'react'
import * as C from '../styles/Geral.styles'
import Link from 'next/link'
import { useGlobalContext } from './GlobalContext';
import Image from 'next/image'
import Produtos from '../pages/produtos';


const Header = () => {
  const global = useGlobalContext()

React.useEffect(()=>{
  global.totalCarrinho()
},[])

  return (
    <>
    <C.SectionBg>
     <C.Container>
       <C.ContainerFlex>
         <C.ContatoDados>
           <img src="/imgs/email.png" alt="email" />
           <C.Dados>
             felipe@gmail.com
           </C.Dados>
           <img src="/imgs/tel.png" alt="tel" />
           <C.Dados>
             (17) 9 9674-9174
           </C.Dados>
         </C.ContatoDados>
         <div>
         <Link href='/carrinho'>
           <C.Carrinho src="/imgs/carrinho.png">
          </C.Carrinho>
         </Link>
         <C.Total>{global.totalItem}</C.Total>
         </div>
         
       </C.ContainerFlex>
     </C.Container>
    </C.SectionBg>
    <C.Container>
      <C.Logo>
        proDevs
      </C.Logo>
      <Link href="/">
      <C.HomeNav>
        Home
      </C.HomeNav>
      </Link>
      <Link href="/produtos">
      <C.ProdutoNav>
        Produtos
      </C.ProdutoNav>
        </Link> 
        <C.Pesquisa>
          <C.Pesq>
          </C.Pesq>
          <C.Lupa>
            <img src="/imgs/pesquisa.png" alt="lupa" />
          </C.Lupa>
        </C.Pesquisa>   
    </C.Container>

    </>
  )
}

export default Header
