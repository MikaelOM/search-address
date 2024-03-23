/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"

import { Teste } from "./Teste"
test('test', () => {
  const { getByText } = render(<Teste/>)

  expect(getByText('Teste')).toBeTruthy()
})
