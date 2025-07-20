import type { LanguageData } from '$lib/stores/language';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BadgeQuestionMark, Book, Mail, Phone, Users } from 'lucide-svelte';

interface FooterData {
	links: {
		name: LanguageData;
		content: {
			name: LanguageData;
			href: string;
			icon: any;
			iconType?: 'fontawesome' | 'lucide';
		}[];
	}[];
}

export let footer: FooterData = {
	links: [
		{
			name: {
				fr: 'À propos',
				en: 'About'
			},
			content: [
				{ name: { fr: 'Équipe', en: 'Team' }, href: '/team', icon: Users },
				{
					name: { fr: 'Carrières', en: 'Careers' },
					href: '/careers',
					icon: Book
				},
				{
					name: { fr: 'Notre histoire', en: 'Our story' },
					href: '/about',
					icon: Book
				}
			]
		},
		{
			name: {
				fr: 'Aide',
				en: 'Help'
			},
			content: [
				{ name: { fr: 'FAQ', en: 'FAQ' }, href: '/#', icon: BadgeQuestionMark },
				{ name: { fr: 'Support', en: 'Support' }, href: '/#', icon: Book },
				{
					name: { fr: 'Contactez-nous', en: 'Contact us' },
					href: '/contact',
					icon: Mail
				}
			]
		},
		{
			name: {
				fr: 'Contact',
				en: 'Contact'
			},
			content: [
				{
					name: { fr: 'Email', en: 'Email' },
					href: 'mailto:company@codiha.com',
					icon: Mail,
					iconType: 'lucide'
				},

				{
					name: { fr: 'Whatsapp', en: 'Whatsapp' },
					href: 'https://wa.me/213553238410',
					icon: faWhatsapp,
					iconType: 'fontawesome'
				},

				{
					name: { fr: 'Téléphone', en: 'Phone' },
					href: 'tel:+213553238410',
					icon: Phone,
					iconType: 'lucide'
				}
			]
		}
	]
};
