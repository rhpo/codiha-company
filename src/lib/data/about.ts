import type { LanguageData } from '$lib/stores/language';

type About = {
	title: LanguageData;
	subtitle: LanguageData;
	description: LanguageData;
};

export const about: About = {
	title: {
		fr: 'Qui sommes-nous ?',
		en: 'Who are we?'
	},
	subtitle: {
		fr: 'Une équipe passionnée au service de vos projets digitaux',
		en: 'A passionate team at the service of your digital projects'
	},
	description: {
		fr: 'Chez CODIHA Agency, nous sommes une équipe de développeurs pro, designers et communauté digitale unis par une passion commune : créer des expériences IT exceptionnelles qui transforment les idées en succès.',
		en: 'At CODIHA Agency, we are a team of pro developers, designers, and digital community united by a common passion: creating exceptional IT experiences that turn ideas into success.'
	}
};
