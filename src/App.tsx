import React from 'react'
import { useState } from 'react';
import { Form } from './components/Form'
import { ShowDataLocality } from './components/ShowDataLocality'

import './App.css'
export interface AddressType {
  cep: string;
  uf: string;
  logradouro: string;
  bairro: string;
  localidade: string;
}

function App() {
  const [addressData, setAddressData] = useState<AddressType>()
  const [isOpen, setIsOpen] = useState(false)

  function handleData(dataAddress: AddressType) {
    setAddressData(dataAddress)
    setIsOpen(true)
  }

  function handleToGoBack() {
    setIsOpen(false)
    setTimeout(() => setAddressData(undefined), 230)
  }
  
  return (
    <>
      <div className='contentPage'>
        <h1>Find address with zip code</h1>
        <Form setAddressData={handleData}/>
        { addressData &&
          <ShowDataLocality 
            dataAddress={addressData}
            handleToGoBack={handleToGoBack}
            isOpenModal={isOpen}
          />
        }
      </div>
    </>
  )
}

export default App
