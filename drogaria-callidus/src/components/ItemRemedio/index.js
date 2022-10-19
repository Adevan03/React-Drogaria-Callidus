import React from 'react'
import { ItemRemedioContainer } from './styles'

function ItemRemedio({remed}) {
  return (
    <ItemRemedioContainer>
        <h3>{remed.id}</h3>
        <br/>
        <h3>{remed.nome}</h3>
        <br/>
        <h3>{remed.marca.nome}</h3>
        <br/>
        <h3>{remed.preco.preco}</h3>
        <hr/>
    </ItemRemedioContainer>
  )
}

export default ItemRemedio