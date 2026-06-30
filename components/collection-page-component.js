export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const isIndianaOnly = Vue.computed(() => {
      const locationQuery = route.query.location;
      return typeof locationQuery === 'string' && locationQuery.toLowerCase() === 'indiana';
    });

    const isGlobalOnly = Vue.computed(() => {
      const viewQuery = route.query.view;
      return typeof viewQuery === 'string' && viewQuery.toLowerCase() === 'global';
    });

    const visibleItems = Vue.computed(() => {
      if (isIndianaOnly.value) {
        return itemsStore.items.filter((item) => {
          const location = String(item.location || '').toLowerCase();
          return location.includes('indiana') || location.includes('indianapolis');
        });
      }

      if (isGlobalOnly.value) {
        return itemsStore.items.filter((item) => {
          const location = String(item.location || '').toLowerCase();
          return !(location.includes('indiana') || location.includes('indianapolis'));
        });
      }

      return itemsStore.items;
    });

    const getBandElement = (bandId) => {
      const elementMap = {
        'starsfadingoutquietly-band': '💔 Emo',
        'fairway-drive-band': '🎸 Indie',
        'maelstrom-band': '🌀 Shoegaze',
        'eddie-ate-dynamite-good-bye-eddie1-band': '💥 Mathcore',
        'closer-band': '😱 Screamo',
        'Todos-tus-tanques-soviéticos-band': '🌀 Post-Shoegaze',
        'ecchymosis-band': '🤘 Metal',
        'electron-sheep-band': '🐑 Psychedelic',
        'the-faces-of-sarah-band': '💀 Gothic',
        'bells-on-trike': '💜 Emo',
      };
      return elementMap[bandId] || '🎵 Music';
    };

    return {
      itemsStore,
      visibleItems,
      getBandElement,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h3 mb-0">Explore More Bands</h1>
      </div>

      <p class="text-muted">Browse local bands by genre, location, and live music style.</p>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading bands...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="itemsStore.items.length === 0" class="alert alert-warning" role="alert">
        No bands found in the dataset.
      </div>

      <div v-else class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="item in visibleItems" :key="item.id">
          <article class="card h-100 shadow-sm border-0">
            <img
              v-if="item.imageUrl"
              :src="item.imageUrl"
              :alt="item.name"
              class="card-img-top collection-card-image object-fit-cover" />
            <div
              v-else
              class="collection-card-image d-flex align-items-center justify-content-center bg-light text-muted">
              No image available
            </div>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h2 class="h5 card-title mb-0">{{ item.name }}</h2>
                <span class="band-element" :title="'Element sticker'">{{ getBandElement(item.id) }}</span>
              </div>

              <p class="card-text text-muted flex-grow-1 collection-description">
                {{ item.description || 'No description available.' }}
              </p>

              <div class="d-grid">
                <router-link :to="'/items/' + item.id" class="btn btn-outline-secondary btn-sm">
                  Learn more
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
};
