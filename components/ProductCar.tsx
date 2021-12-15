import React from 'react'
import * as P from '../styles/carrinho.styled'
import { useGlobalContext } from './GlobalContext'



interface Produto{
  id?:number,
  title?:string,
  new?:boolean,
  value?:number,
  img?:string[],
  rating?:number,
  description?:string,
  originalValue?:number
}

const Car = (product:Produto) => {
  const [quantidade,setQuantidade] = React.useState(1)

  const produto = useGlobalContext()

  return (
    <div>
      <P.Container>

        <P.ContainerItem>
        <P.ImgProduto src={product.img}/>
        <div>
         <P.DesctptionTitle>{product.title}</P.DesctptionTitle>
        </div>
        <div>
        <P.PrecoPromocao>
          R$ {product.value}
        </P.PrecoPromocao>
         <P.Excluir onClick={()=> produto.removeCarrinho(product.id)}>X</P.Excluir>
         <P.Qntd>
          <P.Subtrair>-</P.Subtrair>
          <P.Quantidade>{quantidade}</P.Quantidade>
          <P.Somar>+</P.Somar>
         </P.Qntd>
         <P.PrecoPromocao>
          R$ {product.value}
        </P.PrecoPromocao>
        </div>
        </P.ContainerItem>

      </P.Container>
    </div>
  )
}

export default Car
