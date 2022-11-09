import React, {useState, useEffect} from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from './ItemDetail'
import catalogueDb from "../assets/data/catalogue.js"
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {

  const {iditem} = useParams();

  let [item, setItem] = useState({});
 
  useEffect(()=>{
    const getItem = new Promise((res, rej) => {
      setTimeout(()=>{
        res(catalogueDb)
      },2000) 
    })
    
    getItem.then((res)=>{
      iditem && setItem(res.find((item)=>item.id == iditem))
      console.log(item)
     
    })
  },[iditem])


  return (
    <div className="item_detail_container">
      <ItemDetail item={item}/>
    </div>
  )

}