import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders first page with LinguAI visible and prev disabled in English', () => {
  render(<App />);
  expect(screen.getByText(/LinguAI/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /previous page/i })).toBeDisabled();
  expect(screen.getByRole('button', { name: /next page/i })).toBeEnabled();
});

test('next page shows Binance and disables next arrow in English', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /next page/i }));
  expect(screen.getByText(/Binance Merchant Trading Flow/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /previous page/i })).toBeEnabled();
  expect(screen.getByRole('button', { name: /next page/i })).toBeDisabled();
});

test('resets to first page when language changes', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /next page/i }));
  fireEvent.click(screen.getByRole('button', { name: 'VI' }));
  expect(screen.getByText(/LinguAI/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /trang trước/i })).toBeDisabled();
});

test('renders Vietnamese pagination labels', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'VI' }));
  expect(screen.getByRole('button', { name: /trang trước/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /trang tiếp theo/i })).toBeInTheDocument();
});
