<script setup lang="ts">
	import { ref } from 'vue'

	const props = defineProps({
		openSidebar: {
			type: Boolean,
			required: true
		}
	})
	const links = ref([
		{
			name: 'Button',
			href: '/button'
		},
		{
			name: 'Checkbox',
			href: '/checkbox'
		},
		{
			name: 'Radiobutton',
			href: '/radiobutton'
		},
		{
			name: 'Progress',
			href: '/progress'
		},
		{
			name: 'Input',
			href: '/input'
		},
		{
			name: 'Tabs',
			href: '/tabs'
		},
		{
			name: 'Table',
			href: '/table'
		},
		{
			name: 'Movies',
			href: '/movies'
		}
	])
</script>

<template>
	<div :class="['sidebar', { sidebar_isopen: openSidebar }]">
		<RouterLink
			v-for="link in links"
			:id="link.name"
			:key="link.name"
			:to="link.href"
			class="sidebar__link"
		>
			{{ link.name }}
		</RouterLink>
	</div>
</template>

<style lang="scss" scoped>
	.sidebar {
		top: 62px;
		left: 0;
		height: 100%;
		background-color: #fff;
		position: fixed;
		width: 250px;
		padding: 20px;
		transition: 0.2s;
		box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.07);
		transform: translateX(-250px);
		&_isopen {
			transform: translateX(0px);
		}
		&__link {
			display: block;
			border-radius: 12px;
			padding: 10px;
			border: 2px solid #fff;
			transition: 0.2s;
			font-weight: bold;
			margin-bottom: 10px;
			&:hover {
				color: var(--primary-color);
			}
		}
	}
</style>
