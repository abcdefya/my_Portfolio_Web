import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders latest CV information in English', () => {
  render(<App />);

  expect(screen.getByText(/AIOps\/MLOps Engineer/i)).toBeInTheDocument();
  expect(screen.getByText(/AI English Speaking Coach/i)).toBeInTheDocument();
  expect(screen.getByText(/LLM & Agentic AI/i)).toBeInTheDocument();
  expect(screen.getAllByText(/NTQ Solution/i).length).toBeGreaterThan(0);
});

test('renders latest CV information in Vietnamese', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'VI' }));

  expect(screen.getByText(/Kỹ sư AIOps\/MLOps/i)).toBeInTheDocument();
  expect(screen.getByText(/Huấn luyện viên nói tiếng Anh AI/i)).toBeInTheDocument();
  expect(screen.getByText(/LLM & AI tác tử/i)).toBeInTheDocument();
  expect(screen.getAllByText(/NTQ Solution/i).length).toBeGreaterThan(0);
});
