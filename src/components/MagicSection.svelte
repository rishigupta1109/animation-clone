<script>
	import MagicalCard from './MagicalCard.svelte';
	import Wand from './Wand.svelte';
</script>

<div class="container">
	<div class="head">
		<h1>Magician</h1>
		<h4>Cast a spell on your Figma designs.</h4>
		<button> magician.design </button>
	</div>
	<Wand horizontal={true} style="box-shadow:1px 66px 63px 40px rgba(106,49,232,1)" />
	<MagicalCard>
		<svelte:fragment slot="first">
			<div class="row">
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
			</div>
			<div class="row">
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
			</div>
			<div class="row">
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
				<div class="block">@</div>
			</div>
		</svelte:fragment>
	</MagicalCard>
	<MagicalCard>
		<svelte:fragment slot="first">
			<h1>Rishi Gupta</h1>
		</svelte:fragment>
		<!-- <svelte:fragment slot="second">
			<h1>Lorem Ipsum</h1>
		</svelte:fragment> -->
	</MagicalCard>
</div>

<style>
	.container {
		min-height: 60vh;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		gap: 1.5rem;
	}
	.head {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1.5rem;
		backdrop-filter: blur(2px);
		padding: 1rem 2rem;
	}
	h1 {
		color: white;
		font-size: 5rem;
		font-weight: 500;
	}
	h4 {
		color: white;
		font-size: 1.5rem;
		font-weight: 400;
	}
	button {
		background-color: transparent;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.283);
		padding: 0.5rem 1.5rem;
		border-radius: 20px;
		color: white;
		font-size: 1rem;
		transition: all 0.3s ease-in-out;
	}
	button:hover {
		border: 1px solid rgba(255, 255, 255, 0.694);
		cursor: pointer;
	}
	.row {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.block {
		width: 60px;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: black;
		color: white;
		margin: 0.5rem;
		border-radius: 10px;
	}
</style>
