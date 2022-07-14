import { render, screen } from '@testing-library/react';
import ProductSelection from '../components/Mesero/Breakfast/ProductSelection.js'

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mesero/i);
  expect(linkElement).toBeInTheDocument();
});
*/
test('buscamos el input por su plceholder', () => {
  render(<ProductSelection />);
  
  const placeholderClient = screen.getByPlaceholderText(/CLIENTE/i)
  const placeholderTable = screen.getByPlaceholderText(/MESA/i)

  expect(placeholderClient).toBeInTheDocument()
  expect(placeholderTable).toBeInTheDocument()

});

test('btn', () => {
  render(<ProductSelection />);
  
  const btn = screen.getByText(/ENVIAR/i)

  expect(btn).toBeInTheDocument()
});


