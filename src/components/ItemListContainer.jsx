import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import EmpyElement from './EmpyElement';



export default function ItemListContainer({greeting}) {
    const greetingStyle = {
        fontSize: "5rem",
        color: "#1976d2",
        backgroundColor: "#FFF",
    }
    const {idcategory} = useParams();

    let [catalogue, setCatalogue] = useState([]);
    let [categoryNoExists, setCategoryNoExists] = useState(false)
    useEffect(()=>{

      setCategoryNoExists(false)
      const db = getFirestore();
      let itemsCollection;
      if (idcategory) {
        itemsCollection = query(collection(db, 'items'), where('category', '==', idcategory));
      } else {
        itemsCollection = collection(db, 'items');
      }
     // console.log(itemsCollection)
      getDocs(itemsCollection).then((res) => {
        if (!res.docs.length){
          setCategoryNoExists(true)
        }else{
        const arrayNorm = res.docs.map((element) => {
        return { id: element.id, ...element.data() };
        });
        setCatalogue(arrayNorm);
      }
      })

    },[idcategory]) 

    if ( categoryNoExists ){
      return  <EmpyElement/>
      }

  return (
    <>
      <div style={greetingStyle}>{greeting}</div>
      {idcategory && <div style={{fontSize:"2rem", color:"#1976d2"}}>{idcategory.toUpperCase()}</div>}
      <ItemList items={catalogue} />
    </>
  )
}
