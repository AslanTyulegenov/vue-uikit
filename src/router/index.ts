import { createRouter, createWebHistory } from 'vue-router'
import {
	IndexView,
	ButtonView,
	CheckboxView,
	RadiobuttonView,
	ProgressView,
	InputView,
	TabsView,
	TableView,
	MoviesView
} from '@/views'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'IndexView',
			component: IndexView
		},
		{
			path: '/button',
			name: 'ButtonView',
			component: ButtonView
		},
		{
			path: '/checkbox',
			name: 'CheckboxView',
			component: CheckboxView
		},
		{
			path: '/radiobutton',
			name: 'RadiobuttonView',
			component: RadiobuttonView
		},
		{
			path: '/progress',
			name: 'ProgressView',
			component: ProgressView
		},
		{
			path: '/input',
			name: 'InputView',
			component: InputView
		},
		{
			path: '/tabs',
			name: 'TabsView',
			component: TabsView
		},
		{
			path: '/movies',
			name: 'MoviesView',
			component: MoviesView
		}
	]
})
export default router
