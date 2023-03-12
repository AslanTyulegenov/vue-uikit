<script setup lang="ts">
	import Checkbox from '@/components/Checkbox/Checkbox.vue'
	import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue'
	import { ref } from 'vue'

	const checkboxActive = ref(true)
	const checkboxDisabledChecked = ref(true)

	const heroes = ref([
		{ name: 'Spider-Man', id: 'spider-man' },
		{ name: 'Superman', id: 'superman' },
		{ name: 'Iron Man', id: 'ironMan' },
		{ name: 'Batman', id: 'batman' }
	])

	const selectedHeroes = ref([])
</script>

<template>
	<h1 class="heading1">Checkbox</h1>
	<h2 class="heading2">Checkbox Active</h2>
	{{ checkboxActive }}
	<div class="line">
		<Checkbox
			id="checkboxActive"
			v-model:checked="checkboxActive"
			name="checkboxActive"
			value="I like it"
			lable="Checkbox active"
		></Checkbox>
	</div>
	<h2 class="heading2">Checkbox Disabled</h2>
	<div class="line">
		<Checkbox
			id="checkboxDisabled"
			v-model:checked="checkboxDisabledChecked"
			disabled
			name="checkboxDisabled"
			value="I like it"
			lable="Checkbox disabled"
		></Checkbox>
	</div>
	<h2 class="heading2">Checkbox Disabled</h2>
	<div class="line line_block">
		<p>Selected Heroes: {{ selectedHeroes }}</p>
		<CheckboxGroup
			v-model:value="selectedHeroes"
			:options="heroes"
			name="heroes"
		/>
	</div>

	<h2 class="heading2">Switch</h2>
	<div class="line">
		<Checkbox
			id="switch"
			v-model:checked="checkboxActive"
			name="checkboxDisabled"
			value="I like it"
			lable="Switch disabled"
			type="switch"
		/>
	</div>
</template>
