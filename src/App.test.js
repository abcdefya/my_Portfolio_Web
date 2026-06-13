import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the first featured project and advances one project at a time in English', () => {
  render(<App />);

  expect(screen.getByText(/LinguAI/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /previous project/i })).toBeDisabled();
  expect(screen.getByRole('button', { name: /next project/i })).toBeEnabled();

  fireEvent.click(screen.getByRole('button', { name: /next project/i }));

  expect(screen.getByText(/LLM-as-Judge Evaluation Platform/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /previous project/i })).toBeEnabled();
});

test('disables the next arrow on the last featured project in English', () => {
  render(<App />);

  const nextButton = screen.getByRole('button', { name: /next project/i });

  fireEvent.click(nextButton);
  fireEvent.click(nextButton);
  fireEvent.click(nextButton);

  expect(screen.getByText(/Binance Merchant Trading Flow/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /next project/i })).toBeDisabled();
});

test('renders featured project navigation in Vietnamese', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'VI' }));

  expect(screen.getByText(/LinguAI/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /dự án trước/i })).toBeDisabled();

  fireEvent.click(screen.getByRole('button', { name: /dự án tiếp theo/i }));

  expect(screen.getByText(/Nền tảng đánh giá LLM-as-Judge/i)).toBeInTheDocument();
});

test('resets to the first featured project when language changes', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /next project/i }));
  fireEvent.click(screen.getByRole('button', { name: 'VI' }));

  expect(screen.getByText(/LinguAI/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /dự án trước/i })).toBeDisabled();
});
