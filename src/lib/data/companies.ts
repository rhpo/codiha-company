import type { LanguageData } from '$lib/stores/language';
import { BRAND_NAME } from './brand';

export const CompaniesSection: { [key: string]: LanguageData } = {
	title: {
		fr: 'Trois entreprises autonomes',
		en: 'Now three standalone companies'
	}
};

export type Company = {
	id: number;
	name: string;
	description: LanguageData;
	details: LanguageData; // Optional details property
	image: string;
	cover: string; // cover image property
	color: string;
	url?: string; // Optional URL property
};

export const companies: Company[] = [
	{
		id: 1,
		name: 'Agency',
		description: {
			fr: 'Votre créateur Premium de sites internet en Algérie.',
			en: 'Your Premium website creator in Algeria.'
		},
		details: {
			fr: `${BRAND_NAME} Agency web spécialisée dans la création de sites internet et d'applications web, le tout en Algérie.`,
			en: `${BRAND_NAME} Agency is a web agency specialized in creating websites and web applications, all in Algeria.`
		},
		image: `/banners/agency.jpg`,
		cover: `/companies/agency.jpg`,
		color: '#002157', // Optional color property
		url: 'https://agency.codiha.com' // Optional URL property
	},
	{
		id: 2,
		name: 'E-Academy',
		description: {
			fr: "Construire l'avenir de l'éducation.",
			en: 'Building the future of education.'
		},
		details: {
			fr: `${BRAND_NAME} E-Academy est une plateforme éducative dédiée à l'apprentissage des technologies modernes et à la formation continue.`,
			en: `${BRAND_NAME} E-Academy is an educational platform dedicated to learning modern technologies and continuous training.`
		},
		image: `/banners/academy.jpg`,
		cover: `/companies/academy.jpg`,

		color: '#5e20ee', // Optional color property
		url: 'https://academy.codiha.com' // Optional URL property
	},
	{
		id: 3,
		name: 'Club',
		description: {
			fr: 'Un club étudiant en informatique.',
			en: 'A student-led IT club.'
		},
		details: {
			en: `${BRAND_NAME} Club is a student-led IT club made in 2023 with many activities, events & workshops.`,
			fr: '${BRAND_NAME} Club est un club étudiant en informatique créé en 2023 avec de nombreuses activités, événements et ateliers.'
		},
		image: `/banners/club.jpg`,
		cover: `/companies/club.jpg`,

		color: '#006eff', // Optional color property
		url: 'https://club.codiha.com' // Optional URL property
	}
];
