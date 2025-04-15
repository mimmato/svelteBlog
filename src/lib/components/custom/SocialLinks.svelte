<script>
    import Icon from '@iconify/svelte';
  
    const socialLinks = [
      { href: 'https://github.com/mimmato', icon: 'mdi:github', label: 'GitHub' },
      { href: 'https://linkedin.com/in/mihmihaylov', icon: 'mdi:linkedin', label: 'LinkedIn' },
    ];
  </script>
  
  <style>
    .socials {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      margin-top: 0;
    }
  
    a {
      color: inherit;
      text-decoration: none;
      font-size: 4.5rem;
      transition: transform 0.2s ease;
    }
  
    a:hover {
      transform: scale(1.2);
    }
  </style>
  
  <div class="socials">
    {#each socialLinks as link}
      <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
        <Icon icon={link.icon} />
      </a>
    {/each}
  </div>  