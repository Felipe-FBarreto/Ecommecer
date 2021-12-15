import React, { ReactNode } from 'react';
import axios from 'axios';

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

export const GlobalContext = React.createContext({});

export const GlobalStorage:React.FC = ({children}) => {
  const [carrinho, setCarrinho] = React.useState<Produto[]>([]);
  const [produtos, setProdutos] = React.useState<Produto[]>([])


  const [total,setTotal] = React.useState(0)

  const [totalItem ,setTotalItem] = React.useState()
 
  function totalCarrinho(){
 
}

async function dadosApi (){
  const response = await axios.get('https://api.npoint.io/8c1f1e1303f606bc225b')
  const json = await response.data.payload  
  setProdutos(json)
}

React.useEffect(() => {
  dadosApi()
  getLocalStorage()
  total
},[])


function addProdutoCarrinho(produto:Produto){
  const NewCarrinho = [...carrinho,produto ]
  setCarrinho(NewCarrinho)
  localStorage.setItem('carrinho', JSON.stringify(NewCarrinho))
  const local = JSON.parse(localStorage.getItem('carrinho')|| '[]')
  setTotalItem(local.length)
}

function removeCarrinho(id:Produto){
  const local = JSON.parse(localStorage.getItem('carrinho')|| '[  ]')
  const idAtual =local.findIndex((item)=> item.id === id)
  local.splice(idAtual,1)
  setCarrinho(local)
  localStorage.setItem('carrinho',JSON.stringify(local) )

  const local1 = JSON.parse(localStorage.getItem('carrinho')|| '[]')
  setTotalItem(local1.length)
  const res = local.map((item)=>item.value)
  const final = res.reduce((acc:number , atual:number)=>{
  const resultado = acc + atual
  return  resultado 
  },0)
  const totalFinal =  final.toFixed(2)
  setTotal(totalFinal)
}


function LimparCarrinho(){
  localStorage.clear()
  setCarrinho([])
  setTotal(0)
}

function getLocalStorage(){
 const dadosLocal =  JSON.parse(localStorage.getItem('carrinho')|| '[]')
 setCarrinho(dadosLocal)
}

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho,produtos, setProdutos,addProdutoCarrinho,getLocalStorage,removeCarrinho,total,LimparCarrinho,totalCarrinho,totalItem}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = ()=> {
  const context = React.useContext(GlobalContext)
  return context
}