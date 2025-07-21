import { writable, type Writable, derived, get } from 'svelte/store';

// Language definitions
export const availableLanguages = {
	fr: { title: 'Français' },
	en: { title: 'English' }
} as const;

export type LanguageCode = keyof typeof availableLanguages;
export type LanguageData = {
	[key in LanguageCode]: string;
};

export type Language = {
	name: string;
	code: LanguageCode;
};

export const languages: Language[] = Object.entries(availableLanguages).map(
	([code, { title }]) => ({
		name: title,
		code: code as LanguageCode
	})
);

let lang: Language;
// Active language store
export const language: Writable<Language> = writable(languages[1]);

// Convenience derived store for current language code
export const currentLangCode = derived(language, ($lang) => $lang.code);

// Initialize language from localStorage
let initialized = false;

export function setupLanguage() {
	if (initialized) return;
	initialized = true;

	const stored = localStorage.getItem('language');
	let found: Language | undefined;

	if (stored) {
		try {
			const parsed = JSON.parse(stored);
			found = languages.find((l) => l.code === parsed.code);
		} catch {
			found = undefined;
		}
	}

	// If not found in localStorage, check browser language
	if (!found && typeof navigator !== 'undefined' && navigator.language) {
		const browserLang = navigator.language.slice(0, 2) as LanguageCode;
		found = languages.find((l) => l.code === browserLang);
	}

	setLanguage(found?.code || 'fr');

	language.subscribe((value) => {
		localStorage.setItem('language', JSON.stringify(value));
		document.documentElement.lang = value.code;

		lang = value;
	});
}

// Toggle between available languages
export function toggleLanguage() {
	language.update((current) => {
		const index = languages.findIndex((l) => l.code === current.code);
		return languages[(index + 1) % languages.length];
	});
}

// Manually set a language
export function setLanguage(code: LanguageCode) {
	const found = languages.find((l) => l.code === code);
	if (found) language.set(found);
	else console.warn(`Language code "${code}" not found.`);
}

export type TextFunction = (name: LanguageData) => string;
