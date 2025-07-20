<script lang="ts">
	import { BRAND_NAME } from '$lib/data/brand';

	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import View from '$lib/components/ui/View.svelte';
	import Fa from 'svelte-fa';

	import { Phone } from 'lucide-svelte';
	import { socials } from '$lib/data/socials';

	import { type TextFunction } from '$lib/stores/language';
	import { getContext } from 'svelte';

	let text = getContext<TextFunction>('text');

	let data = $state({
		name: '',
		email: '',
		phone: '',
		message: ''
	});

	let submitStatus = $state({
		loading: false,
		success: false,
		error: null
	});

	function handleSubmit(event: Event) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		submitStatus.loading = true;

		fetch('/api/submit', {
			method: 'POST',
			body: formData
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				submitStatus.loading = false;
				submitStatus.success = true;
				console.log('Form submitted successfully:', data);
			})
			.catch((error) => {
				submitStatus.loading = false;
				submitStatus.error = error.message;
				console.error('Error submitting form:', error);
			});
	}
</script>

<svelte:head>
	<title
		>{text({
			en: 'Contact Us',
			fr: 'Contactez-nous'
		})} | {BRAND_NAME}</title
	>
	<meta
		name="description"
		content={text({
			en: 'Contact us for any questions or requests for quotes. We are here to help.',
			fr: 'Contactez-nous pour toute question ou demande de devis. Nous sommes là pour vous aider.'
		})}
	/>
</svelte:head>

<main>
	<View align="column" center>
		<div class="hero-section">
			<Phone size="5rem" style="margin-bottom: 2rem;" />
			<h1 data-aos="fade-up" data-aos-duration="800">
				{text({
					en: 'Contact ',
					fr: 'Contactez '
				})}
				{BRAND_NAME}
			</h1>
			<p data-aos="fade-up" data-aos-duration="800">
				{text({
					en: 'Feel free to contact us for any questions or requests for quotes, or via Whatsapp or phone.',
					fr: "N'hésitez pas à nous contacter pour toute question ou demande de devis, ou bien par Whatsapp ou par téléphone."
				})}
			</p>
		</div>

		<div class="socials">
			{#each socials as social}
				<a
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					class="social-link"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<Fa icon={social.icon} />
				</a>
			{/each}
		</div>

		<form onsubmit={handleSubmit} class="contact-form" data-aos="fade-up" data-aos-duration="800">
			<Input
				type="text"
				name="name"
				required
				bind:value={data.name}
				label={text({
					en: 'Name',
					fr: 'Nom'
				})}
				placeholder={text({
					en: 'Your Name',
					fr: 'Votre Nom'
				})}
			/>

			<Input
				type="email"
				name="email"
				required
				bind:value={data.email}
				label={text({
					en: 'Email',
					fr: 'Email'
				})}
				placeholder={text({
					en: 'your@email.com',
					fr: 'votre@email.com'
				})}
			/>

			<Input
				type="tel"
				name="phone"
				required
				bind:value={data.phone}
				label={text({
					en: 'Phone',
					fr: 'Téléphone'
				})}
				placeholder={text({
					en: '+213 678 123 456',
					fr: '+213 678 123 456'
				})}
			/>

			<Input
				category="textarea"
				bind:value={data.message}
				name="message"
				required
				label={text({
					en: 'Message',
					fr: 'Message'
				})}
				placeholder={text({
					en: 'Your message here...',
					fr: 'Votre message ici...'
				})}
			></Input>

			<Button type="submit" variant="primary" fullWidth
				>{text({
					en: 'Send',
					fr: 'Envoyer'
				})}</Button
			>

			<p class="status">
				{#if submitStatus.loading}
					<span class="loading"
						>{text({
							en: 'Sending...',
							fr: 'Envoi en cours...'
						})}</span
					>
				{:else if submitStatus.success}
					<span class="success"
						>{text({
							en: 'Message sent successfully!',
							fr: 'Message envoyé avec succès !'
						})}</span
					>
				{:else if submitStatus.error}
					<span class="error"
						>{text({
							en: 'Error: ' + submitStatus.error,
							fr: 'Erreur : ' + submitStatus.error
						})}</span
					>
				{/if}
			</p>
		</form></View
	>
</main>

<style>
	.socials {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin: 2rem 0;
	}

	.socials a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		color: var(--text-color);
		text-decoration: none;
		transition:
			background-color 0.3s ease,
			transform 0.3s ease;

		font-size: 1.5rem;
	}

	.socials a:hover {
		transform: scale(1.1);
	}

	.status {
		text-align: center;
		margin-top: 1rem;
		font-size: 0.875rem;
	}

	main {
		min-height: 100vh;
		padding-top: 6rem;
		padding-bottom: 4rem;
	}

	form {
		max-width: 1000px;
		width: 100%;

		background-color: var(--background-light);
		padding: 2rem;
	}

	.hero-section {
		text-align: center;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-section h1 {
		font-size: clamp(2.5rem, 8vw, 4rem);
		font-weight: 600;
		margin-bottom: 1.5rem;
		color: var(--text-color);
		font-family: var(--font-secondary);
	}

	.hero-section p {
		font-size: 1.125rem;
		color: var(--text-light);
		line-height: 1.7;
		max-width: 600px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		main {
			padding-top: calc(var(--header-height) + 1rem);
			padding-bottom: 2rem;
		}

		.hero-section {
			margin-bottom: 2.5rem;
			padding: 0 0.5rem;
		}

		.hero-section h1 {
			font-size: 2.5rem;
		}

		.hero-section p {
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
		.hero-section h1 {
			font-size: 2rem;
		}
	}
</style>
