<script setup lang="ts">
	import { useMovieStore } from '@/stores/movieStore'
	import Movie from '@/components/Movie/Movie.vue'
	import Search from '@/components/Movie/Search.vue'

	const movieStore = useMovieStore()

	const setTab = (id: number) => {
		movieStore.setAcviteTab(id)
	}
</script>

<template>
	<main class="main">
		<header class="header">
			<img src="/logo.svg" alt="logo" class="header-logo" />
			<h2>My Favorite movies</h2>
		</header>
		<div class="tabs">
			<button
				:class="['btn', { btn_green: movieStore.activeTab === 1 }]"
				@click="_ => setTab(1)"
			>
				Favorite
			</button>
			<button
				:class="['btn', { btn_green: movieStore.activeTab === 2 }]"
				@click="_ => setTab(2)"
			>
				Search
			</button>
		</div>
		<div v-if="movieStore.activeTab === 1" class="movies">
			<h3>Watched Movies</h3>
			<Movie
				v-for="movie in movieStore.watchedMovies"
				:key="movie.id"
				:movie="movie"
			></Movie>
			<h3>All Movies {{ movieStore.totalCountMovies }}</h3>
			<Movie
				v-for="movie in movieStore.movies"
				:key="movie.id"
				:movie="movie"
			></Movie>
		</div>
		<div class="search" v-else><Search /></div>
	</main>
</template>

<style lang="css">
	.main {
		margin: 0 auto;
	}

	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
	.header-logo {
		max-width: 50px;
		margin-right: 10px;
	}
	.btn {
		border: none;
		width: 100px;
		height: 40px;
		font-size: 14px;
		margin: 0 10px;
		border-radius: 10px;
		cursor: pointer;
		background: #efefef;
	}
	.btn:hover {
		opacity: 0.7;
	}
	.btn_green {
		background: #37df5c;
	}
	.tabs {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
	}
</style>
