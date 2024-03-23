/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"

const  mockProps = {
  setAddressData: jest.fn() 
}

import { Form } from "./Form"
test('test', () => {
  const { getByText } = render(<Form {...mockProps}/>)

  expect(getByText('Teste')).toBeTruthy()
})