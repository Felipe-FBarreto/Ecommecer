import axios from "axios"
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"
import { useRouter } from "next/dist/client/router"

interface IProduto{
  id:string,
  new:boolean,
  title:string,
  value:number,
  video:null,
  images:string[],
  reating:number,
  reviews:string | number[],
  description:string,
  originalValue:number,
  additionalInfo:string,
  fullDescription:string,
  success:boolean
}

const PageProduto: NextPage = (props:IProduto) =>{
  const { query} = useRouter()
  const {idProduto} = query
    return (
      <>
        <h1>Produto{ props.title} </h1>
      </>
    )
    
    
}

export const getServerSideProps: GetServerSideProps = async(context: GetServerSidePropsContext) =>{

  const  id =  context.query.idProduto as string
 
   const response = await axios.get(`https://api.npoint.io/${id}`)
   const produto = await response.data.playload
 
   return{
     props:{
       produto
     }
   }
 }


export default PageProduto