import React from 'react'
import { useGlobalContext } from './GlobalContext';
import Product from './Product';

interface Produto{
  id:number,
  title:string,
  new:boolean,
  value:number,
  images:string[],
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
const ProductList = () => {
  const produto = useGlobalContext()

  return (
    <div>
        {produto.produtos.map((produtos:Produto,index:number)=>(

          <Product 
            key={produtos.id}
            id={produtos.id}
            title={produtos.title}
            img={produtos.images.map((img:string)=> img)}
            originalValue={produtos.originalValue}
            value={produtos.value}
            description={produtos.description}
            
          />
        ))}
              
    </div>
  )
}

export default ProductList
