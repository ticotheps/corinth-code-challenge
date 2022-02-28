import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

describe('HomePage', () => {
	it('renders a heading', () => {
		render(<HomePage />);

		const heading = screen.getByRole('heading', {
			name: "Find 'em.",
		});
		expect(heading).toBeInTheDocument();
	});
});
