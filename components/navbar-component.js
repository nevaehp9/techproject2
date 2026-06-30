export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="navbar sticky-top bg-dark border-bottom border-secondary px-3">
      <span class="navbar-brand mb-0 h1"><i class="bi bi-music-note-list me-2"></i>Local Band Support</span>

      <div class="ms-auto d-flex gap-2">
        <router-link class="btn btn-outline-primary btn-sm" to="/">
          <i class="bi bi-house me-1"></i>Home
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm d-flex align-items-center" to="/items">
          <i class="bi bi-music-note-list me-1"></i>Bands
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm" to="/about">
          <i class="bi bi-info-circle me-1"></i>About
        </router-link>
      </div>
    </nav>
  `,
};
