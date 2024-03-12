import { render } from '@testing-library/react'
import { Teste } from './Teste'

describe('Teste Component', () => {
  it('should return a JSX element with the text "Hello"', () => {
    const { getByText } = render(<Teste />)
    expect(getByText('Hello')).toBeTruthy()
  });
});