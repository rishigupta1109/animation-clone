<script>
	import { onMount } from 'svelte';
	import { expoIn } from 'svelte/easing';
	import Navbar from '../components/Navbar.svelte';
	import SolarSystem from '../components/SolarSystem.svelte';
	import MagicSection from '../components/MagicSection.svelte';

	let num;
	onMount(() => {
		num = 0;
	});
	const slidePlusFade = (node, { delay, duration, axis }) => {
		return {
			delay,
			duration,
			css: (t, u) => {
				const eased = expoIn(u);
				return `
                    transform: translate${axis.toUpperCase()}(-${eased * 50}px);
                    opacity: ${t};
                `;
			}
		};
	};
</script>

<main>
	<div class="background" />
	<Navbar />
	{#key num}
		<div class="block1">
			<span>
				<h1 in:slidePlusFade={{ delay: 0, duration: 1000, axis: 'y' }}>Design tools</h1>
				<h1 in:slidePlusFade={{ delay: 0, duration: 1000, axis: 'y' }}>from the future.</h1>
			</span>
			<span>
				<h4 in:slidePlusFade={{ delay: 100, duration: 1000, axis: 'y' }}>
					Unleash your creativity with diagram`s
				</h4>
				<h4 in:slidePlusFade={{ delay: 100, duration: 1000, axis: 'y' }}>
					AI Powered Design Tools
				</h4>
			</span>
			<button in:slidePlusFade={{ delay: 200, duration: 1000, axis: 'y' }}
				>Explore the future</button
			>
		</div>
	{/key}
	<SolarSystem />
	<MagicSection />
</main>

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, Courier,
			monospace;
		background: linear-gradient(90deg, rgba(0, 0, 0, 0.874) 0%, black);
	}
	main {
		min-height: 100vh;
		overflow: hidden;
		position: relative;
	}

	.background {
		position: absolute;
		background: url('../images/6438c3059d443cd7a78762eb_stars-bg.png');
		height: 100%;
		background-size: 1096px;
		background-repeat: repeat;
		width: 98vw;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.block1 button {
		background-color: transparent;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.283);
		padding: 0.5rem 1.5rem;
		border-radius: 20px;
		color: white;
		font-size: 1rem;
		transition: all 0.3s ease-in-out;
	}
	.block1 button:hover {
		border: 1px solid rgba(255, 255, 255, 0.694);
		cursor: pointer;
	}
	.block1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 70vh;
		gap: 1.5rem;
	}
	.block1 span h1 {
		color: white;
		font-size: 5rem;
		font-weight: 500;
	}
	.block1 span h4 {
		color: white;
		font-size: 1.5rem;
		font-weight: 400;
	}
	.block1 span {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
