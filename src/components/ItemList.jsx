import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos} ) => {
  return (
    <div className="productos-grilla">
      {
        productos.length > 0 ?
        productos.map((producto) => {
          return <Item producto={producto} />
        })
        : <p>No hay productos</p>
    }
    </div>
  )
}
