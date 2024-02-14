import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineSend } from "react-icons/ai"

import { AddressType } from '../App';

import './Form.css'

interface FormProps {
  setAddressData: (addressData: AddressType) => void;
}

export function Form({ setAddressData }: FormProps) {
  const [dataForSearchAddress, setDataForSearchAddress] = useState('')

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
    if (!validateCep()) return

    fetch(`https://viacep.com.br/ws/${dataForSearchAddress}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        console.log("Endereço não encontrado.")
      } else {
        setAddressData(data)
      }
      console.log('==> passou')
      
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error)
    })
    console.log("sem erro");
    
  }

  console.log('dataForSearchAddress', dataForSearchAddress)
  console.log('validatecep', validateCep())

  return (
    <div>
      <form id="form-cep" className={!validateCep() ? 'form-invalid-cep': ''} onSubmit={handleSubmitAddressForm}>
        <input 
          type="text" 
          id="address" 
          name="address"
          value={dataForSearchAddress}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>
          <AiOutlineSend size={28}/>
        </button>
      </form>
    </div>
  )
}