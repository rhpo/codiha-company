import type { LanguageData } from '$lib/stores/language';
import { Home, Info, Pen, Phone } from 'lucide-svelte';

type NavigationItem = {
	name: LanguageData;
	href: string;
	id: string;
	icon: any;
};

export let navigation: NavigationItem[] = [
	{
		name: {
			en: 'Home',
			fr: 'Accueil'
		},
		href: '/',
		id: 'home',
		icon: Home
	},
	{
		name: {
			en: 'Companies',
			fr: 'Nos entreprises'
		},
		href: '#companies',
		id: 'companies',
		icon: Pen
	},
	{
		name: {
			en: 'About',
			fr: 'À propos'
		},
		href: '/about',
		id: 'about',
		icon: Info
	},
	{
		name: {
			en: 'Contact',
			fr: 'Contact'
		},
		href: '/contact',
		id: 'contact',
		icon: Phone
	}
];
