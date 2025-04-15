<script lang="ts">
	import * as config from '$lib/config';
	import SocialLinks from '$lib/components/custom/SocialLinks.svelte';
</script>

<footer class="footer-content">
	<div class="footer-row">
		<p>{config.title} &copy; {new Date().getFullYear()}</p>
		<SocialLinks />
	</div>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		text-align: center;
	}

	.footer-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	footer p {
		color: var(--text-2);
		margin: 0;
	}
</style>
