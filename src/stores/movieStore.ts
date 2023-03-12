import { defineStore } from 'pinia'

interface Movie {
	id: number
	original_title: string
	overview: string
	poster_path: string
	release_date: string
	isWatched: boolean
}

interface MovieState {
	movies: Array<Movie>
	activeTab: number
}

export const useMovieStore = defineStore('movieStore', {
	state: (): MovieState => ({
		movies: [
			{
				id: 1,
				original_title: 'Spider-Man',
				overview:
					'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.',
				poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
				release_date: '2002-05-01',
				isWatched: false
			},
			{
				id: 2,
				original_title: 'The Batman',
				overview:
					'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
				poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
				release_date: '2022-03-01',
				isWatched: true
			}
		],
		activeTab: 2
	}),
	getters: {
		watchedMovies(): Array<Movie> {
			return this.movies.filter(x => x.isWatched)
		},
		totalCountMovies(): number {
			return this.movies.length
		}
	},
	actions: {
		setAcviteTab(id: number): void {
			this.activeTab = id
		},
		togglewatched(id: number): void {
			const idx = this.movies.findIndex(x => x.id === id)
			this.movies[idx].isWatched = !this.movies[idx].isWatched
		},
		deleteMovie(id: number): void {
			this.movies = this.movies.filter(x => x.id !== id)
		}
	}
})
