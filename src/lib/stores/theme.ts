// theme
import { writable, type Writable } from 'svelte/store';
export const isDarkMode: Writable<boolean> = writable(false);

export function setupDarkMode() {
	let stored = JSON.parse(localStorage.getItem('isDarkMode') as string);
	stored ??= false; // Default to false if not set

	isDarkMode.set(stored);

	isDarkMode.subscribe((value) => {
		localStorage.setItem('isDarkMode', JSON.stringify(value));

		value
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	});
}

export function toggleDarkMode() {
	isDarkMode.update((current) => !current);
}
