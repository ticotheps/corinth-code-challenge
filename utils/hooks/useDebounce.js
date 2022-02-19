import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(
		() => {
			// updates the debounced value after given delay
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);
			// clears and restarts the timeout if the value changes within the delay period
			return () => {
				clearTimeout(handler);
			};
		},
		// only recall effect if value or delay changes
		[value, delay]
	);

	return debouncedValue;
}
