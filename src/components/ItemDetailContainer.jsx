import React, {useState, useEffect} from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import EmpyElement from './EmpyElement';



export default function ItemDetailContainer() {

  const {iditem} = useParams();

  let [item, setItem] = useState({});

  let [itemNoExist, setItemNoExists] = useState(false);
 
  useEffect(()=>{
   
    const db = getFirestore();

    let itemSinNorm = doc(db, 'items', iditem);

   // console.log(itemSinNorm.data());

    getDoc(itemSinNorm).then((item) => {
      //console.log(item.data())

      item.data()? setItem({ id: item.id, ...item.data() }) : setItemNoExists((true));

    });
    
  },[iditem])

 if ( itemNoExist ){
  return  <EmpyElement/>
  }


  return (
    <div className="item_detail_container">
      <ItemDetail item={item}/>
    </div>
  )

}