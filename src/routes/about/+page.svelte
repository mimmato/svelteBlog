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

  <div class="intro-content">
    <div class="intro-text">
      <p>
        This page is a home for sharing the projects I'm working on, and serves as a personal recap of the technologies I explore along the way.
      </p>

      <p>
        I'm currently on the path to becoming a <strong>Quality Assurance Engineer</strong>, diving deep into test automation, Java, Selenium, Playwright, APIs and more.
      </p>

      <p>Some projects that I've been working on include:</p>
      <ul>
        <li>
          1. Frontend test automation with Java, Selenium, POM and Page Factory:
          <br />
          <a href="https://github.com/mimmato/SK17-Automation-Final" target="_blank">
            <br /><br />Skillo training website
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <br />
          2. A Java scraper for events in Bulgaria based on ticket sources:
          <br />
          <a href="https://github.com/mimmato/eventsGather" target="_blank">
            <br /><br />eventsGather
          </a>
        </li>
      </ul>
    </div>

    <div class="tech-stack-sidebar">
      <p><strong>Tech stack:</strong></p>
      <div class="tech-icons">
        <Icon icon="logos:java" title="Java" />
        <Icon icon="logos:selenium" title="Selenium" />
        <Icon icon="logos:postman-icon" title="Postman" />
        <Icon icon="logos:git-icon" title="Git" />
        <Icon icon="simple-icons:github" title="GitHub" />
        <Icon icon="logos:mysql-icon" title="MySQL" />
        <Icon icon="logos:jira" title="Jira" />
      </div>
    </div>
  </div>
</div>
<!-- 
<div class="connect-section">
  <p>Connect with me:</p>
  <SocialLinks />
</div> -->

<style>
  h1 {
    white-space: nowrap;
    text-align: center;
  }

  .intro-section {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .profile-img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #0077cc;
    flex-shrink: 0;
  }

  .intro-content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .intro-text {
    flex: 2;
    max-width: 600px;
  }

  .intro-text p {
    text-align: justify;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .tech-stack-sidebar {
    flex: 1;
    min-width: 200px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-left: 2px solid #444;
    padding-left: 1.5rem;
    margin-left: 1.5rem;
  }

  .tech-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }

  .tech-icons :global(svg) {
    width: 40px;
    height: 40px;
    transition: transform 0.2s ease;
  }

  .tech-icons :global(svg):hover {
    transform: scale(1.2);
  }

  /* .connect-section {
    text-align: center;
    margin-top: 2rem;
  }

  .connect-section p {
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--text-2);
  } */
</style>
