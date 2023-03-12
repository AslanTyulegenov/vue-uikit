<script setup lang="ts">
	import Tabs from '@/components/Tabs.vue'
	import { ref } from 'vue'

	const tabs = [
		{ name: 'About', label: 'О проекте' },
		{ name: 'Vue', label: 'Про Vue' },
		{ name: 'React', label: 'Про React' }
	] as Array<{ name: string; label: string }>

	const selectedTab = ref('Vue')
	const toggleTab = (tabName: string) => {
		selectedTab.value = tabName
	}
</script>

<template>
	<h1 class="heading1">Tabs</h1>
	<Tabs :names="tabs" :selected-tab="selectedTab" @change-tab="toggleTab">
		<div v-if="selectedTab === 'About'">Lorem ipsum dolor sit amet.</div>
		<div v-if="selectedTab === 'Vue'">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.
		</div>
		<div v-if="selectedTab === 'React'">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque.
			Laborum iusto odit minus incidunt.
		</div>
	</Tabs>
</template>
