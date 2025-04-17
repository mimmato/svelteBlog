<script lang="ts">
	import { onMount } from 'svelte'


// 	import { afterUpdate } from 'svelte'

// afterUpdate(() => {
// 	const nodes = document.querySelectorAll('.prose h2, .prose h3')
// 	headings = Array.from(nodes).map((node) => {
// 		const text = node.textContent || ''
// 		const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
// 		node.id = id
// 		return { id, text, level: node.tagName === 'H3' ? 3 : 2 }
// 	})
// })


	import { formatDate } from '$lib/utils'
	// import TableOfContents from '$lib/components/TableOfContents.svelte'

	let { data } = $props()
	let headings = []

	onMount(() => {
		const nodes = document.querySelectorAll('.prose h2, .prose h3')
		headings = Array.from(nodes).map((node) => {
			const text = node.textContent || ''
			const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
			node.id = id // Assign ID for anchor link
			return { id, text, level: node.tagName === 'H3' ? 3 : 2 }
		})
	})
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="layout">
	<!-- <TableOfContents {headings} /> -->

	<article>
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Published at {formatDate(data.meta.date)}</p>
		</hgroup>

		<div class="tags">
			{#each data.meta.categories as category}
				<span class="surface-4">&num;{category}</span>
			{/each}
		</div>

		<div class="prose">
			<data.content />
		</div>
	</article>
</div>

<style>
	.layout {
		display: flex;
		gap: 2rem;
		max-inline-size: 1000px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	article {
		flex: 1;

		h1 {
			text-transform: capitalize;
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-top: var(--size-7);

			> * {
				padding: var(--size-2) var(--size-3);
				border-radius: var(--radius-round);
			}
		}
	}
</style>
