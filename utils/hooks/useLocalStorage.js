import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
	// state to store our value
	// pass initial state function useState() so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === 'undefined') {
			return initialValue;
		}

		try {
			// retrieves item from local storage by key
			const item = window.localStorage.getItem(key);
			// parses stored JSON or returns initial value if null
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log({ error });
			return initialValue;
		}
	});

	const setValue = (value) => {
		try {
			// allows value to be a function so we have same API as useState()
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			// saves state
			setStoredValue(valueToStore);
			// saves to local storage
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			console.log({ error });
		}
	};
	return [storedValue, setValue];
}
