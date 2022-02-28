import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/index';

test('renders three header elements on the Home Page', () => {
	render(<HomePage />);
	expect(screen.getByText(/find them/i)).toBeInTheDocument();
	expect(screen.getByText(/meet them/i)).toBeInTheDocument();
	expect(screen.getByText(/greet them/i)).toBeInTheDocument();
});

test('renders two button elements on the Home Page', () => {
	render(<HomePage />);
	expect(screen.getByText('Browse All Characters')).toBeInTheDocument();
	expect(screen.getByText('Search Character Name')).toBeInTheDocument();
});
