import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import catalogueDb from "../assets/data/catalogue.js"
import { useParams } from 'react-router-dom';


export default function ItemListContainer({greeting}) {
    const greetingStyle = {
        fontSize: "5rem",
        color: "#1976d2",
        backgroundColor: "#FFF",
    }
    const {idcategory} = useParams();

    let [catalogue, setCatalogue] = useState([]);
   
    useEffect(()=>{
      const mostrarCatalogue = new Promise((res, rej) => {
        setTimeout(()=>{
          res(catalogueDb)
        },2000) 
      })
      
      mostrarCatalogue.then((res)=>{
        if (idcategory){
          setCatalogue(res.filter((item)=>item.category == idcategory))
        }else{
          setCatalogue(res)
        }
      }) 
    },[idcategory])
    
  return (
    <>
      <div style={greetingStyle}>{greeting}</div>
      <ItemList items={catalogue} />
    </>
  )
}
