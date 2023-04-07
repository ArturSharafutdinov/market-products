<template>
  <div style="display: flex; align-items: center; justify-content: center">
    <q-card class="single-card" flat bordered>
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{product.name}}
          </div>
        </div>

        <q-rating v-model="product.rating" :max="5" size="32px"  readonly/>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{product.description}}
        </div>
        <div class="text-caption text-grey">
          {{product.price}}$
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="primary" style="width: 100%" @click="buyProduct">
          Add to cart
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore();

    const productId = computed(() => route.params.productId);

    const product = computed(() => store.getters.getProductById(productId.value));

    const buyProduct = () => {
      return null
    }

    return {
      product,
      buyProduct
    }
  }
})

</script>

<style scoped lang="scss">

.single-card {
  width: 100%;
  max-width: 750px;
}

</style>
