<script>
	import { quartIn } from 'svelte/easing';
	import { draw, fly } from 'svelte/transition';

	let visible = false;
	const orbitalZoom = (node, { delay, duration, speed }) => {
		return {
			delay,
			duration,
			css: (t) => {
				return `
					transform: scale(${t * speed});
					opacity: ${t};
				`;
			}
		};
	};
</script>

<div class="system-container">
	<div class="system">
		{#if visible}
			<div
				in:orbitalZoom={{
					delay: 1000,
					duration: 1000,
					speed: 1
				}}
				class="orbit o1"
			>
				<img
					in:orbitalZoom={{
						delay: 2000,
						duration: 1000,
						speed: 1
					}}
					alt="p1"
					src="p1.png"
					height="150"
				/>
			</div>
			<div
				in:orbitalZoom={{
					delay: 500,
					duration: 1000,
					speed: 1
				}}
				class="orbit o2"
			>
				<img
					in:orbitalZoom={{
						delay: 2000,
						duration: 1000,
						speed: 1
					}}
					alt="p2"
					src="p2.png"
					height="100"
				/>
			</div>
			<div
				in:orbitalZoom={{
					delay: 0,
					duration: 1000,
					speed: 1
				}}
				class="orbit o3"
			>
				<img
					in:orbitalZoom={{
						delay: 2000,
						duration: 1000,
						speed: 1
					}}
					alt="p3"
					src="p3.png"
					height="50"
				/>
			</div>
			<div
				in:orbitalZoom={{
					delay: 0,
					duration: 1000,
					speed: 1
				}}
				class="sun"
			/>
		{/if}
	</div>
</div>
<svelte:window
	on:mouseover={() => {
		visible = true;
	}}
/>

<style>
	.system-container {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 70vh;
	}
	.system {
		z-index: -1;
		position: absolute;
		top: -30%;
		left: 0;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sun {
		position: absolute;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: yellow;
		box-shadow: 0 0 50px 10px yellow;
		z-index: 1;
	}
	.orbit {
		position: absolute;
		aspect-ratio: 1;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.189);
	}
	@keyframes orbit1 {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.orbit img {
		position: absolute;
	}
	.o1 img {
		top: 10%;
	}
	.o2 img {
		top: 5%;
	}
	.o3 img {
		top: 15%;
	}

	.o1 {
		animation: orbit1 45s linear infinite;
		height: 100%;
	}
	.o2 {
		animation: orbit1 45s linear infinite;
		height: 70%;
	}
	.o3 {
		animation: orbit1 45s linear infinite;
		height: 40%;
	}
</style>
