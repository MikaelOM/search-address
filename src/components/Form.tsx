import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineSend } from "react-icons/ai"

import { AddressType } from '../App';

import './Form.css'

interface FormProps {
  setAddressData: (addressData: AddressType) => void;
}

export function Form({ setAddressData }: FormProps) {
  const [dataForSearchAddress, setDataForSearchAddress] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setDataForSearchAddress(event.target.value)
  }
  
  function handleSubmitAddressForm(event: FormEvent) {
    event.preventDefault()

    fetch(`https://viacep.com.br/ws/${dataForSearchAddress}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        console.log("Endereço não encontrado.")
      } else {
        setAddressData(data)
      }
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error)
    })
  }

  return (
    <div>
      <form id="form-cep" className='form' onSubmit={handleSubmitAddressForm}>
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