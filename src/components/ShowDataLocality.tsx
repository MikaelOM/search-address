import { HiArrowSmLeft } from "react-icons/hi";
import { AddressType } from "../App"

import './ShowDataLocality.css'

interface ShowDataLocalityProps {
  dataAddress: AddressType
  handleToGoBack: () => void
  isOpenModal: boolean
}

export function ShowDataLocality({ dataAddress, handleToGoBack, isOpenModal }: ShowDataLocalityProps) {
  console.log(!dataAddress)
  return (
    <div className="data-address-container">
      <div className={`data-address-content ${!isOpenModal && 'close'}`}>
        <div className="data-address-header">
          <button type="button" onClick={handleToGoBack}>
            <HiArrowSmLeft size={28}/>
          </button>
          <h1>Address Infromation</h1>
        </div>
        <section>
          <p> <span>Postal Code:</span> { dataAddress.cep } </p>
          <p> { dataAddress.logradouro } </p>
          <p> { dataAddress.bairro } </p>
          <p> { dataAddress.localidade } - { dataAddress.uf } </p>
        </section>
      </div>
    </div>
  )
}