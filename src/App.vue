<script setup lang="ts">
	import { ref } from 'vue'
	import TheHeader from '@/components/Layout/TheHeader.vue'
	import TheSidebar from '@/components/Layout/TheSidebar.vue'

	const isOpenMenu = ref(false)

	const toggleMenu = () => {
		isOpenMenu.value = !isOpenMenu.value
	}
</script>

<template>
	<div class="container">
		<div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
		<TheHeader></TheHeader>
		<TheSidebar :open-sidebar="isOpenMenu"></TheSidebar>

		<div :class="['content', { content_full: !isOpenMenu }]">
			<RouterView />
		</div>
	</div>
</template>

<style lang="scss">
	@import './styles/global.scss';

	#app {
		font-family: Arial, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.content {
		max-width: 1400px;
		margin-left: 250px;
		padding: 30px;
		transition: 0.3s;

		&_full {
			margin-left: 0;
		}
	}

	.sidebar-toggle {
		position: fixed;
		left: 0;
		width: 15px;
		background-color: var(--primary);
		height: 100%;
		top: 62px;
		z-index: 1;
		cursor: pointer;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
