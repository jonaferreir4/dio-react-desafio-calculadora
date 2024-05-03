import Display from "./components/Display";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";

import { useState } from "react";

const App = () => {

  const [number, setNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')


  const handleClearNumber = () => {
    setNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleClearOneNumber = () => {
    setNumber(prev => {
      if (prev !== '0') {
        return prev.length === 1 ? '0' : prev.slice(0, -1)
      } else {
        return prev
      }
    })
  }

  const handleAddNumber = (n) => {

    setNumber(prev => `${prev === '0' ? '' : prev}${n}`)
  }

  const handleSum = () => {
    let sum = 0
    setOperation('+')
    if (firstNumber === '0') {
      setFirstNumber(String(number));
      setNumber('0')
    } else {
        const secondNumber = Number(number)
        sum = Number(firstNumber) + secondNumber
        setFirstNumber(String(sum))
        setNumber(String(sum))
        
      }
  }

  const handleSub = () => {
    setOperation('-')
    if (firstNumber === '0') {
      setFirstNumber(String(number));
      setNumber('0')
    } else {
      const sub = Number(firstNumber) - Number(number)
      setNumber(String(sub))
    }

  }

  const handleMult = () => {
    setOperation('x')
    if (firstNumber === '0') {
      setFirstNumber(String(number));
      setNumber('0')
    } else {
      const mult = Number(firstNumber) * Number(number)
      setNumber(String(mult))
    }

  }

  const handleDiv = () => {
    setOperation('/')
    if (firstNumber === '0') {
      setFirstNumber(String(number));
      setNumber('0')
    } else {
      const mult = Number(firstNumber) / Number(number)
      setNumber(String(mult))
    }

  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && number !== '0') {
      switch (operation) {
        case '+':
          handleSum()
          setOperation('')
          setFirstNumber('0')
          break;
        case '-':
          handleSub()
          setOperation('')
          setFirstNumber('0')
          break;
        case 'x':
          handleMult()
          setOperation('')
          setFirstNumber('0')
          break;
        case '/':
          handleDiv()
          setOperation('')
          setFirstNumber('0')
          break;

        default:
          handleClearNumber()
      }

    }
  }

  return (
    <Container>
      <Content>
        <Display value={number} />
        <Row>
          <Button label='AC' onClick={handleClearNumber} />
          <Button label='[x]' onClick={handleClearOneNumber} />
          <Button label='%' onClick={() => handleAddNumber()} />
          <Button label='/' onClick={handleDiv} />
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')} />
          <Button label='8' onClick={() => handleAddNumber('8')} />
          <Button label='9' onClick={() => handleAddNumber('9')} />
          <Button label='x' onClick={handleMult} />
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')} />
          <Button label='5' onClick={() => handleAddNumber('5')} />
          <Button label='6' onClick={() => handleAddNumber('6')} />
          <Button label='-' onClick={handleSub} />

        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')} />
          <Button label='2' onClick={() => handleAddNumber('2')} />
          <Button label='3' onClick={() => handleAddNumber('3')} />
          <Button label='+' onClick={handleSum} />
        </Row>
        <Row>
          <Button label='e' onClick={() => handleAddNumber('2,71828')} />
          <Button label='0' onClick={() => handleAddNumber('0')} />
          <Button label=',' onClick={() => handleAddNumber(',')} />
          <Button label='=' onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
