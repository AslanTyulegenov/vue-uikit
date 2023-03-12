<script setup lang="ts">
	import Radiobutton from '@/components/Radiobutton.vue'
	import { ref } from 'vue'

	const footballClubs = ref([
		{ name: 'CSKA Moscow', id: 1 },
		{ name: 'Spartak Moscow', id: 2 },
		{ name: 'Rubin Kazan', id: 3 }
	])

	const selectedClub = ref('')
</script>

<template>
	<h1 class="heading1">Radiobuttons</h1>
	<h2 class="heading2">Base</h2>
	<div class="line line_block">
		<p>Selected club: {{ selectedClub }}</p>
		<div v-for="club in footballClubs" :key="club.id">
			<Radiobutton
				:id="club.id.toString()"
				v-model:checked-value="selectedClub"
				:value="club.name"
				:lable="club.name"
				name="club"
			/>
		</div>
	</div>
</template>
