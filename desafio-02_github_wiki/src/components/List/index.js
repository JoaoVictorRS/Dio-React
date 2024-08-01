import React from 'react'
import { ItemContainer } from './styles'

function ListRepos({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='blank'>Ver Repositório</a><br />
      <a href='#' onClick={handleRemove} className='remover'>REMOVER</a>
      <hr />
    </ItemContainer>
  )
}

export default ListRepos