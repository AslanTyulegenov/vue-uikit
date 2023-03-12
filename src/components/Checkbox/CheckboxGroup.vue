<script setup lang="ts">
	import Checkbox from './Checkbox.vue'
	type CheckboxGroupOption = {
		id: string
		name: string
	}

	const props = defineProps({
		value: {
			type: Array,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		options: {
			type: Array<CheckboxGroupOption>,
			required: true,
			validator: (value: Array<CheckboxGroupOption>) => {
				const hasNameKey = value.every(option =>
					Object.keys(option).includes('name')
				)
				const hasIdKey = value.every(option =>
					Object.keys(option).includes('id')
				)
				return hasNameKey && hasIdKey
			}
		}
	})

	const emits = defineEmits(['update:value'])

	const check = (params: { optionId: string; checked: boolean }) => {
		let updateValue = [...props.value]
		if (params.checked) {
			updateValue.push(params.optionId)
		} else {
			updateValue = updateValue.filter(x => x !== params.optionId)
		}
		emits('update:value', updateValue)
	}
</script>

<template>
	<div v-for="option in options" :key="option.id">
		<Checkbox
			:id="option.id"
			:lable="option.name"
			:value="option.name"
			:name="option.name"
			:checked="value.includes(option.id)"
			group
			@updateCheckboxGroup="check"
		/>
	</div>
</template>
