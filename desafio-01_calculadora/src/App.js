import { useState } from 'react';
import Button from './components/Button'
import InputScreen from "./components/Input";

import { Container, Content, Row } from "./styles";

function App() {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  //Função para limpar a calculadora
  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  //Função para adicionar numeros na calculadora
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  //Função de soma
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  //Função para subtrair
  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  //Função para multiplicar
  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('x')
    } else {
      const sub = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  //Função para dividir
  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sub = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  //Função para dar resultado das operações
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleSubNumbers()
          break;
        case 'x':
          handleMultiplyNumbers()
          break;
        case '/':
          handleDivisionNumbers()
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <InputScreen value={currentNumber} />

        <Row>
          <Button label="x" onClick={() => handleMultiplyNumbers()} />
          <Button label="/" onClick={() => handleDivisionNumbers()} />
          <Button label="-" onClick={() => handleSubNumbers()} />
          <Button label="+" onClick={() => handleSumNumbers()} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="CL" onClick={() => handleClear()} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="=" onClick={() => handleEquals()} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
