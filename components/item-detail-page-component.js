export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    const concertList = Vue.computed(() => {
      const id = selectedItem.value?.id;

      if (id === 'starsfadingoutquietly-band') {
        return [
          'June 25th — Chicago',
          'June 28th — Iowa City',
          'June 30th — Indianapolis',
        ];
      }

      if (id === 'maelstrom-band') {
        return [
          'April 15th — France',
          'August 7th — Ohio',
        ];
      }

      if (id === 'fairway-drive-band') {
        return [
          'May 10th — Toronto',
          'June 18th — Vancouver',
          'July 22nd — Montreal',
        ];
      }

      if (id === 'eddie-ate-dynamite-good-bye-eddie1-band') {
        return [
          'May 22nd — Los Angeles',
          'July 3rd — San Diego',
          'August 9th — Phoenix',
        ];
      }

      if (id === 'closer-band') {
        return [
          'June 12th — Philadelphia',
          'July 19th — Brooklyn',
          'September 5th — Baltimore',
        ];
      }

      if (id === 'Todos-tus-tanques-soviéticos-band') {
        return [
          'May 27th — Buenos Aires',
          'August 2nd — Montevideo',
          'October 14th — Santiago',
        ];
      }

      if (id === 'ecchymosis-band') {
        return [
          'June 8th — Bangkok',
          'September 11th — Chiang Mai',
          'November 3rd — Phuket',
        ];
      }

      if (id === 'electron-sheep-band') {
        return [
          'July 14th — Seoul',
          'October 4th — Busan',
          'December 6th — Daegu',
        ];
      }

      if (id === 'the-faces-of-sarah-band') {
        return [
          'May 31st — London',
          'September 20th — Manchester',
          'November 8th — Glasgow',
        ];
      }

      if (id === 'bells-on-trike') {
        return [
          'June 1st — Richmond',
          'August 16th — Charlottesville',
          'September 27th — Norfolk',
        ];
      }

      return [];
    });

    return {
      itemsStore,
      selectedItem,
      concertList,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <router-link to="/items" class="btn btn-link ps-0 mb-3">← Back to bands</router-link>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading band details...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="!selectedItem" class="alert alert-warning" role="alert">
        Band not found.
      </div>

      <article v-else class="card shadow-sm border-0 overflow-hidden">
        <img
          v-if="selectedItem.imageUrl"
          :src="selectedItem.imageUrl"
          :alt="selectedItem.name"
          class="item-detail-image w-100 object-fit-cover" />
        <div
          v-else
          class="item-detail-image w-100 d-flex align-items-center justify-content-center bg-light text-muted">
          No image available
        </div>

        <div class="card-body p-4">
          <div class="d-flex align-items-center gap-2 mb-2">
            <h1 class="h3 mb-0">{{ selectedItem.name }}</h1>
          </div>

          <p class="lead mb-3">{{ selectedItem.description || 'No description available.' }}</p>
          <p class="mb-0"><strong>Location:</strong> <span class="location-highlight">{{ selectedItem.location || 'N/A' }}</span></p>
          <p class="mb-0"><strong>Genre:</strong> {{ selectedItem.category || 'N/A' }}</p>

          <div class="mt-4 p-3 rounded-3 border border-secondary-subtle text-center">
            <h2 class="h3 mb-2">Upcoming concerts</h2>
            <ul v-if="concertList.length" class="list-unstyled mb-0 text-muted">
              <li v-for="concert in concertList" :key="concert" class="mt-2">{{ concert }}</li>
            </ul>
            <p v-else class="mb-0 text-muted">No upcoming concerts listed yet.</p>
          </div>
        </div>
      </article>
    </section>
  `,
};
