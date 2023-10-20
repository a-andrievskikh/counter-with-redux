import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { store } from './store'
import { Provider } from 'react-redux'

test('App should be rendered', () => {
  render(<Provider store={store}>
    <App />,
  </Provider>)
  const linkElement = screen.getByText(/Counter/i)
  expect(linkElement).toBeInTheDocument()
})
