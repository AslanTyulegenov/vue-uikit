<script setup lang="ts">
	import { ref } from 'vue'
	import ProgressBar from '@/components/Progress/ProgressBar.vue'
	import ProgressCircle from '@/components/Progress/ProgressCircle.vue'
	import Button from '@/components/Button.vue'

	const percentBar = ref(40)
	const addPrecentBar = () => {
		percentBar.value += 10
		if (percentBar.value > 100) {
			percentBar.value = 100
		}
	}
	const reducePrecentBar = () => {
		percentBar.value -= 10
		if (percentBar.value < 0) {
			percentBar.value = 0
		}
	}
</script>

<template>
	<h1 class="heading1">Progress</h1>
	<h2 class="heading2">Progress bar</h2>
	<div class="line line_block">
		<ProgressBar :percent="percentBar" color="success" maxwith="300px" />
		<Button color="success" rounded lable="Add 10%" @click="addPrecentBar" />
		<Button
			color="danger"
			rounded
			lable="Reduce 10%"
			@click="reducePrecentBar"
		/>
	</div>
	<h2 class="heading2">Progress bar</h2>
	<div class="line line_block">
		<ProgressCircle :percent="percentBar" color="warning" maxwith="300px" />
	</div>
</template>
