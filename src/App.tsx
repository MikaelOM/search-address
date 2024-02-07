import { useState } from 'react';
import { Form } from './components/Form'

import './App.css'
export interface AddressType {
  cep: string;
  uf: string;
  logradouro: string;
  bairro: string;
  localidade: string;
}

function App() {
  const [addressData, setAddressData ] = useState<AddressType>()

  function handleData(dataAddress: AddressType) {
    setAddressData(dataAddress)
  }
  
  console.log('==> addressData', addressData)

  return (
    <>
      <div className='contentPage'>
        <h1>Find address with zip code:</h1>
        <Form setAddressData={handleData}/>
      </div>
    </>
  )
}

export default App
