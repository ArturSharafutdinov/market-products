<template>
	<div style="display: flex; align-items: center; justify-content: center">
		<q-btn color="green" style="height: max-content" @click="goBack" icon="arrow_circle_left"/>
		<q-card class="single-card" flat bordered v-if="product">
			<q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
			<q-card-section>
				<div class="row no-wrap items-center">
					<div class="col text-h6 ellipsis">
						{{product.name}}
					</div>
				</div>
				<q-rating v-model="product.rating" :max="5" size="32px" readonly />
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
import { computed, defineComponent, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
	setup() {
		const route = useRoute();
		const store = useStore();
		const router = useRouter();

		const productId = computed(() => {
			if (route.params.productId) {
				return route.params.productId;
			} else {
				const urlParts = route.path.split('/');
				return urlParts[urlParts.length - 1];
			}
		});

		const product = computed(() => store.getters.getCurrentProduct); // Используйте getCurrentProduct

		watchEffect(() => {
			if (!product.value) {
				store.dispatch('fetchProductById', productId.value).catch((error) => {
					console.error(error);
					router.push('/404'); // redirect to 404 page
				});
			}
		});

		const buyProduct = () => {
			return null;
		};

		const goBack = () => {
			router.go(-1);
		};

		return {
			product,
			buyProduct,
			goBack,
		};
	},
});
</script>

<style scoped lang="scss">
.single-card {
	width: 100%;
	max-width: 750px;
}
</style>
