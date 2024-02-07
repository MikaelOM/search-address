import { ChangeEvent, FormEvent, useState } from 'react'
import { AddressType } from '../App';
import './Form.css'

interface FormProps {
  setAddressData: (addressData: AddressType) => void;
}

export function Form({ setAddressData }: FormProps) {
  const [address, setAddress] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value)
  }
  
  function handleSubmitAddressForm(event: FormEvent) {
    event.preventDefault()
    fetch(`https://viacep.com.br/ws/${address}/json/`)
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
          value={address}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}