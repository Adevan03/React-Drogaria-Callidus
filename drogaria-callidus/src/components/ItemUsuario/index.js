import React from 'react'
import { ItemUsuarioContainer } from './styles'

function ItemUsuario({usr}) {
  return (
    <ItemUsuarioContainer>
        <h3>{usr.id}</h3>
        <br/>
        <h3>{usr.nome}</h3>
        <br/>
        <h3>{usr.idade}</h3>
        <br/>
        <h3>{usr.telefone}</h3>
        <br/>
        <h3>{usr.email}</h3>
        <hr/>
    </ItemUsuarioContainer>
  )
}

export default ItemRemedio