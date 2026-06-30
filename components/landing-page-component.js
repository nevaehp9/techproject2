export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <section class="intro-panel mb-4 p-4 rounded-4">
        <h2 class="h4 mt-0">For fans who want to go deeper</h2>
        <p>
          This app helps people like Addy discover bands near them and explore many musical genres. Each band entry includes genre, location, and a short story so you can learn more before you go see them live.
        </p>
        <p>
          Start on the collection page to find bands by sound and place, then open a band card to read more details. The app is simple, dark, and concert-style to keep the music vibe clear.
        </p>
      </section>

      <section class="hero-section mb-4 p-4 rounded-4">
        <div class="hero-badge mb-3">Discover your next favorite band</div>
        <h1 class="display-5 mb-3">Discover Local Bands</h1>
        <p class="lead text-light mb-4">Find new local bands, learn about their music, and support the scene close to home.</p>
        <router-link to="/items?location=indiana" class="btn btn-primary btn-lg">
          <i class="bi bi-card-list me-1"></i>Browse local bands
        </router-link>
      </section>

      <section class="global-section mb-4 p-4 rounded-4">
        <div class="hero-badge mb-3">Explore worldwide artists</div>
        <h2 class="display-6 mb-2">Discover Global Bands</h2>
        <p class="text-muted mb-3">Find bands from around the world — listen across genres and borders.</p>
        <router-link to="/items?view=global" class="btn btn-outline-primary btn-lg">
          <i class="bi bi-globe me-1"></i>Browse global bands
        </router-link>
      </section>
    </div>
  `,
};
