<template>
  <div class="row justify-center">
    <q-card v-for="product in products" :key="product.id" class="my-card q-ma-lg" @click="gotoProduct(product.id)">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">{{ product.name }}</div>
        <div class="text-subtitle2">{{ product.description }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-green-5">
        {{ product.price }}$
      </q-card-section>
      <q-card-actions>
        <q-btn @click.stop="addProduct(product)">Buy</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">

import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
/* eslint-disable */ // @ts-ignore
import {orderService$} from '@tko/market-store';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Products',
  setup() {
    const store = useStore();
    const router = useRouter();

    const products = computed(() => {
      return store.getters.getProducts;
    });

    const addProduct = (product) => {
      orderService$.addProduct(product);
    }

    onMounted(async () => {
      try {
        await store.dispatch('fetchProducts');
      } catch (error) {
        console.error(error);
        // Обработка ошибок, например, показ уведомления пользователю
      }
    });

    const gotoProduct = (productId) => {
      router.push(`/product/${productId}`);
    };

    return {
      products,
      gotoProduct,
      addProduct,
    };
  },
});


</script>

<style scoped lang="scss">

.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
