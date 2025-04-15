<script>
	import SocialLinks from '$lib/components/custom/SocialLinks.svelte';
  import Icon from '@iconify/svelte';
</script>


<h1>Welcome to My Tech Space 👋</h1>

<div class="intro-section">
  <img
    src="https://avatars.githubusercontent.com/u/59510395?v=4"
    class="profile-img"
    alt="Portrait of Mihail Mihaylov"
  />

  <div class="intro-text">
    <p>
      This page is a home for sharing the projects I'm working on, and serves as a personal recap of the technologies I explore along the way.
    </p>

    <p>
      I'm currently on the path to becoming a <strong>Quality Assurance Engineer</strong>, diving deep into test automation, Java, Selenium, Playwright, APIs and more.
    </p>
    <p>
      My current tech stack includes:
    </p>

    <div class="tech-icons">
      <Icon icon="logos:java" title="Java" />
      <Icon icon="logos:selenium" title="Selenium" />
      <!-- <Icon icon="logos:playwright" title="Playwright" /> -->
      <Icon icon="logos:postman-icon" title="Postman" />
      <Icon icon="logos:git-icon" title="Git" />
      <!-- <Icon icon="logos:github-icon" title="GitHub" /> -->
      <Icon icon="simple-icons:github" title="GitHub" />  
      <Icon icon="logos:mysql-icon" title="mysql" />

    </div>


    <p> Some projects that I've been working on include:</p>
    <ul>
      <li>
        1. Frontend test automation with Java, Selenium, POM and Page Factory 
        <br>
        <br>
        Click:
        <a href="https://github.com/mimmato/SK17-Automation-Final" target="_blank">
          <br> 
         <br> Skillo training (Test Autommation)
        </a>
      </li>
    </ul>

    <ul>
      <li>
        <br>
        2. A Java scraper for events in Bulgaria based on ticket sources
        <br>
        <br>
        Click:
        <a href="https://github.com/mimmato/eventsGather" target="_blank">
          <br> 
         <br> eventsGather
        </a>
      </li>
    </ul>

  </div>
</div>

<style>
  h1 {
    white-space: nowrap;
    text-align: center;
  }

  .intro-section {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    padding: 1rem;
    flex-wrap: wrap; /* responsive on small screens */
  }

  .profile-img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #0077cc;
    flex-shrink: 0;
    align-items: flex-start  ;
  }

  .intro-text {
    max-width: 500px;
    flex: 1;
  }

  .intro-text p {
    text-align: justify;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .connect-section {
  text-align: center;
  margin-top: 2rem;
}

.connect-section p {
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--text-2);
}

.tech-icons {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	align-items: center;
	margin-bottom: 2rem;
}

.tech-icons :global(svg) {
	width: 40px;
	height: 40px;
	transition: transform 0.2s ease;
}

.tech-icons :global(svg):hover {
	transform: scale(1.2);
}

</style>

<div class="connect-section">
  <p>Connect with me:</p>
  <SocialLinks />
</div>

