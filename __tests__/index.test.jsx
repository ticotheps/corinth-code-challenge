import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('HomePage', () => {
	it('renders a heading', () => {
		render(<HomePage />);

		const heading = screen.getByRole('heading', {
			name: /find em\./i,
		});
		expect(heading).toBeInTheDocument();
	});
});
