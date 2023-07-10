<script>
	export let horizontal = false;
	export let style = '';
	export let movable = false;
	let show = false;
</script>

<div
	class="wand"
	style="height:{horizontal ? '40px' : '400px'};width:{horizontal
		? '400px'
		: '40px'};background:linear-gradient({horizontal
		? '0deg'
		: '90deg'}, black, rgba(57, 57, 57, 0.874), black);position:relative; {(show || movable) &&
		style}"
>
	<div
		class="tip"
		style={horizontal
			? 'top: 0px;left: 0%;border-top-left-radius: 15px;border-bottom-left-radius: 15px;'
			: 'top: -20px;left: 50%;border-top-left-radius: 15px;border-top-right-radius: 15px;'}
	/>
</div>
<svelte:window
	on:scroll={(e) => {
		if (window.scrollY > 700 && !show) {
			setTimeout(() => {
				show = true;
			}, 500);
		}
	}}
/>

<style>
	.wand {
		width: 40px;
		width: 400px;
		background: linear-gradient(90deg, black, rgb(35, 35, 35), black);
		position: relative;
		transition: transform 0.3s ease-in-out;
	}
	.tip {
		background-color: white;
		position: absolute;
		height: 40px;
		width: 40px;
		transform: translateX(-50%);
	}
</style>
