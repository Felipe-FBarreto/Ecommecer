import React from 'react'
import { useGlobalContext } from './GlobalContext';
import Car from './ProductCar';


interface Produto{
  id:number,
  title:string,
  new:boolean,
  value:number,
  img:string[],
  rating?:number,
  description:string,
  originalValue:number
}

export async function getServerSideProps(){
  return{
    props:{
    }
  }
}
const CarrinhoProduct = () => {
  const produto = useGlobalContext()

  const carrinho = produto.carrinho


  return (
    <div>
      {carrinho.map((produtos:Produto)=>(
        <Car
        id={produtos.id}
        title={produtos.title}
        value={produtos.value}
        originalValue={produtos.originalValue}
        img={produtos.img.map((img)=>img)}
        />
      )
      )}
        

    </div>
  )
}

export default CarrinhoProduct
