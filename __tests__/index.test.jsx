import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/index';

test('renders three header elements on Home Page', () => {
	render(<HomePage />);
	expect(screen.getByText(/find them/i)).toBeInTheDocument();
	expect(screen.getByText(/meet them/i)).toBeInTheDocument();
	expect(screen.getByText(/greet them/i)).toBeInTheDocument();
});
