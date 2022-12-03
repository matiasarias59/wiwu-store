import React from 'react'
import "./ItemList.css"
import Item from './Item'
import Loading from './Loading';


export default function ItemList({ items }) {

  return (
    <>
      {!items.length && <Loading />}
      <div className="item_list">
        {items.map((item) => {
          return (
            <Item item={item} key={item.id} />
          )
        })}
      </div>
    </>
      )
}



