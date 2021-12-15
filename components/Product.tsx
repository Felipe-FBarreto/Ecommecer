import React from 'react'
import * as P from '../styles/product.styled'
import { useGlobalContext } from './GlobalContext'



interface Produto{
  id?:number,
  title?:string,
  new?:boolean,
  value?:number,
  img?:any,
  rating?:number,
  description?:string,
  originalValue?:number
}

const Product = (product:Produto) => {

  const produto = useGlobalContext()

  return (
    <div>
      <P.Container>
        <P.ContainerItem>
        <P.ImgProduto src={product.img}/>
        <div>
        <P.DesctptionTitle>{product.title}</P.DesctptionTitle>
        <P.PrecoPromocao>
          R$ {product.value}
        </P.PrecoPromocao>
        <P.PrecoAtual>
          R$ {product.originalValue}
        </P.PrecoAtual>
        <span>⭐⭐⭐⭐⭐</span>
        <P.Description>
          {product.description}
        </P.Description>
         <P.CarrinhoImg src='/imgs/addCar.png' onClick={()=> {produto.addProdutoCarrinho(product)} }></P.CarrinhoImg>
         <P.CarrinhoImg src='/imgs/favoritos.png'></P.CarrinhoImg>
         <P.CarrinhoImg src='/imgs/verDetalhes.png'></P.CarrinhoImg>
        </div>
        </P.ContainerItem>
      </P.Container>
    </div>
  )
}

export default Product
