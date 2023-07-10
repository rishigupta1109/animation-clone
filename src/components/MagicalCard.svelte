<script>
	import { spring, tweened } from 'svelte/motion';
	import Wand from './Wand.svelte';
	import { writable } from 'svelte/store';

	let coords = writable({ x: 0, y: 0 });
</script>

<div class="container">
	<div
		class="card"
		role="cell"
		tabindex="0"
		on:focus={(e) => {}}
		on:mousemove={(e) => {
			console.log(e);
			coords.set({ x: e.clientX, y: e.clientY });
		}}
	>
		<div class="first">
			<slot name="first" />
		</div>
		<div class="second" style="left:max(10px,{$coords.x - 300}px)">
			<slot name="second" />
		</div>
		<Wand
			movable={true}
			style="position:absolute;top:max(45px,min(104px,{$coords.y -
				300}px));left:max(10px,{$coords.x - 340}px);transform:rotate(clamp(-5deg,{$coords.x -
				600}deg,5deg))"
		/>
	</div>
</div>

<style>
	.container {
		min-height: 30vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 8rem 5rem;
	}
	.card {
		width: max(50vw, 400px);
		height: max(50vh, 400px);
		position: relative;
		padding: 8rem 5rem;
		background-color: #1a1a1a;
		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(10px);
		overflow: hidden;
	}
	.first,
	.second {
		display: flex;
		flex-direction: column;
		justify-content: center;

		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	.second {
		background-color: #1a1a1a;
		left: -100%;
	}
</style>
