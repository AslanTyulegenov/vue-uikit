<script setup lang="ts">
	import { ref } from 'vue'
	import { useSearchStore } from '@/stores/searchStore'
	import Loader from '@/components/Movie/Loader.vue'
	import Movie from '@/components/Movie/Movie.vue'

	const searchStore = useSearchStore()
	const searchMovie = ref('')
</script>

<template>
	<form @submit.prevent="_ => searchStore.getMovies(searchMovie)">
		<input
			type="text"
			class="search-input"
			placeholder="Input movie"
			v-model="searchMovie"
		/>
	</form>
	<Loader v-if="searchStore.loader" />
	<div v-else>
		<Movie
			v-for="movie in (searchStore.movies as Array<{id:number}>)"
			:key="movie.id"
			:movie="movie"
			:is-search="true"
		/>
	</div>
</template>

<style scoped>
	.search-input {
		border: 1px solid #e7e7e7;
		width: 100%;
		height: 40px;
		padding: 0 10px;
		margin-bottom: 20px;
		border-radius: 10px;
	}
</style>
