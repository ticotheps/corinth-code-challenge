import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/index';
import CharactersPage from '../pages/characters/index';
import SearchPage from '../pages/characters/search';

test('renders three header elements on the Home Page', () => {
	render(<HomePage />);
	expect(screen.getByText(/find them/i)).toBeInTheDocument();
	expect(screen.getByText(/meet them/i)).toBeInTheDocument();
	expect(screen.getByText(/greet them/i)).toBeInTheDocument();
});

test('renders two button elements on the Home Page', () => {
	render(<HomePage />);
	expect(screen.getByText(/browse all characters/i)).toBeInTheDocument();
	expect(screen.getByText(/search character name/i)).toBeInTheDocument();
});

test('renders a single "Browse All Characters" button underneath the input box on the Search Page', () => {
	render(<SearchPage />);
	expect(screen.getByText(/browse all characters/i)).toBeInTheDocument();
});
