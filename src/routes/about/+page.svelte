<script>
  import Icon from '@iconify/svelte';
</script>

<div class="heading-container">
  <h1>Welcome to My Tech Space 👋</h1>
</div>

<!-- Top Section: Two Columns -->
<div class="top-container">
  <!-- Left: Image + Intro -->
  <div class="left-side">
    <img
      src="https://avatars.githubusercontent.com/u/59510395?v=4"
      class="profile-img"
      alt="Portrait of Mihail Mihaylov"
    />
    <div class="intro-text">
      <p>
        This page is a home for sharing the projects I'm working on, and serves as a personal recap of the technologies I explore along the way.
      </p>

      <br>
      <p>
        I'm currently on the path to becoming a <strong>Quality Assurance Engineer</strong>, diving deep into test automation, Java, Selenium, Playwright, APIs and more.
      </p>
    </div>
  </div>

  <!-- Right: Tech Stack -->
  <div class="right-side">
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

<hr class="section-separator" />

<!-- Bottom Section: Projects -->
<div class="projects-section">
  <h2>Projects I'm working on</h2>
  <ul>
    <li>
      <strong>Frontend test automation</strong> with Java, Selenium, POM and Page Factory:
      <br />
      <br>
      <a href="https://github.com/mimmato/SK17-Automation-Final" target="_blank">
        Skillo training website
      </a>
    </li>
    <li>
      <strong>Java scraper for events in Bulgaria</strong> based on ticket sources:
      <br />
      <br>
      <a href="https://github.com/mimmato/eventsGather" target="_blank">
        eventsGather
      </a>
    </li>
  </ul>
</div>

<style>
  h1 {
    white-space: nowrap;
    text-align: center;
    margin-bottom: 2rem;
  }

  .heading-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .left-side {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    flex: 2;
    min-width: 400px;
  }

  .profile-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #0077cc;
    flex-shrink: 0;
  }

  .intro-text {
    max-width: 400px;
    text-align: justify;
    line-height: 1.6;
  }

  .right-side {
    flex: 1;
    min-width: 220px;
    max-width: 300px;
    padding-left: 1.5rem;
    border-left: 4px solid #ccc;
  }

  .tech-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }

  .tech-icons :global(svg) {
    width: 40px;
    height: 40px;
    transition: transform 0.2s ease;
  }

  .tech-icons :global(svg):hover {
    transform: scale(1.2);
  }

  .section-separator {
    margin: 2rem auto;
    border: none;
    height: 4px;
    background-color: #ccc;
    width: 90%;
  }

  .projects-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }

  .projects-section h2 {
    margin-bottom: 1.5rem;
  }

  .projects-section ul {
    list-style: none;
    padding: 0;
  }

  .projects-section li {
    margin-bottom: 2rem;
    text-align: left;
  }

  .projects-section a {
    color: #0077cc;
    font-weight: bold;
    text-decoration: none;
  }

  .projects-section a:hover {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    .top-container {
      flex-direction: column;
      align-items: center;
    }

    .left-side {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .intro-text {
      max-width: 100%;
    }

    .right-side {
      border-left: none;
      padding-left: 0;
      border-top: 2px solid #444;
      margin-top: 2rem;
    }

    .projects-section {
      text-align: center;
    }

    .projects-section li {
      text-align: center;
    }
  }
</style>
