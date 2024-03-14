import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Form } from './Form'


describe('Form Component', () => {
  // test('The function should correctly apply mask to the postal code input', () => {
  //   const { getByTestId } = render(<Form setAddressData={() => {}} />)
  //   const input = getByTestId('postal-code-input')
  //   fireEvent.change(input, { target: { value: '123456789' } })
  //   expect(input?.value).toBe('12345-678')
  // })

  test('The function should validate the postal code correctly', () => {
    const { getByTestId, getByText } = render(<Form setAddressData={() => {}} />)
    const input = getByTestId('postal-code-input')
    const submitButton = getByTestId('submit-button')
    
    fireEvent.change(input, { target: { value: '12345-678' } })
    fireEvent.click(submitButton)
    expect(getByText('Cep válido')).toBeInTheDocument()
  })

  // test('The function should handle form submission correctly', async () => {
  //   const mockSetAddressData = jest.fn()
  //   const { getByTestId } = render(<Form setAddressData={mockSetAddressData} />)
  //   const input = getByTestId('postal-code-input')
  //   const submitButton = getByTestId('submit-button')
  //   fireEvent.change(input, { target: { value: '12345-678' } })
  //   fireEvent.click(submitButton)
  //   await waitFor(() => expect(mockSetAddressData).toHaveBeenCalled())
  // })
})