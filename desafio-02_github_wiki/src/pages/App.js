import { useState } from 'react';
import logo from '../assets/25231.png'
import Input from '../components/Input';
import ListRepos from '../components/List';
import { api } from '../services/api'

import { Container } from './styles';
import Button from '../components/Button';

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])


  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }
    }

    alert("O repositório não existe ou já foi adicionado")
  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(item => item.id !== id))
  }

  return (
    <Container>
      <img src={logo} width={72} height={72} alt='Logo' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ListRepos key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
