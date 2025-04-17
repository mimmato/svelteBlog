<!-- src/lib/components/TableOfContents.svelte -->
<script lang="ts">
    export let headings: { id: string; text: string; level: number }[] = [];
  </script>
  
  <nav class="toc">
    <ul>
      {#each headings as heading}
      <li style="margin-left: {`${(heading.level - 1) * 1}rem`}">
                  <a href={`#${heading.id}`}>{heading.text}</a>
        </li>
      {/each}
    </ul>
  </nav>
  
  <style>
    .toc {
      position: sticky;
      top: 2rem;
      max-height: 90vh;
      overflow-y: auto;
      font-size: 0.875rem;
      padding-right: 1rem;
    }
  
    .toc a {
      text-decoration: none;
      color: var(--text-2);
    }
  
    .toc a:hover {
      text-decoration: underline;
    }
  </style>
  