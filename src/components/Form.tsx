import React from 'react'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { AiOutlineSend } from "react-icons/ai"

import { AddressType } from '../App';

import'./Form.css'

interface FormProps {
  setAddressData: (addressData: AddressType) => void;
}

export function Form({ setAddressData }: FormProps) {
  const [dataForSearchAddress, setDataForSearchAddress] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {

    if(error !== '' && inputValue !== dataForSearchAddress) {
      setError('')
    }
  
  }, [dataForSearchAddress, error, inputValue])


  const applyMask = (postalCode: string) => {
    return postalCode.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2').slice(0, 9);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const postalCodeWithMask = applyMask(event.target.value)
    setDataForSearchAddress(postalCodeWithMask)
  }

  const validateCep = () => {
    const cepRegex = /^\d{5}-?\d{3}$/;
    return cepRegex.test(dataForSearchAddress);
  };
  
  function handleSubmitAddressForm(event: FormEvent) {
    event.preventDefault()
    setInputValue(dataForSearchAddress)
    
    if (!validateCep()) return setError('Cep inválido')

    fetch(`https://viacep.com.br/ws/${dataForSearchAddress}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        return setError("Endereço não encontrado.")
      } 
       
      return setAddressData(data)      
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error)
    })
  }

  return (
    <div>
      <form id="form-cep" className={!validateCep() ? 'formInvalidCep' : ''} onSubmit={handleSubmitAddressForm}>
        <input 
          className={error !== '' ? 'inputError' : ''}
          type="text" 
          id="address" 
          name="address"
          value={dataForSearchAddress}
          onChange={handleInputChange}
          required
        />
        <button type='submit' className={error !== '' ? 'buttonError' : ''}>
          <AiOutlineSend size={28}/>
        </button>
      </form>
      {error !== '' && (
        <p className='errorMessage'>{error}</p>
      )
      }
    </div>
  )
}