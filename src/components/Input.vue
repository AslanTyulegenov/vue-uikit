<script setup lang="ts">
	import { ErrorObject } from '@vuelidate/core'

	const emits = defineEmits(['update:value'])
	const porps = defineProps({
		error: {
			type: Array<ErrorObject>,
			required: false,
			default: null
		},
		value: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
			required: true
		},
		inputLabel: {
			type: String,
			default: ''
		},
		width: {
			type: String,
			default: '300px'
		}
	})

	const updateValue = (event: Event) => {
		emits('update:value', (event.target as HTMLInputElement).value)
	}
</script>

<template>
	<div class="form-input" :style="{ width: width }">
		<input
			:id="name"
			:type="type"
			:name="name"
			:value="value"
			:placeholder="placeholder"
			@input="updateValue"
			class="input-text"
		/>
		<label :for="name" class="input-label">{{ inputLabel }}</label>
		<TransitionGroup>
			<div v-for="element of error" :key="element.$uid" class="form-error">
				<div class="form-error__message">{{ element.$message }}</div>
			</div>
		</TransitionGroup>
	</div>
</template>

<style lang="scss" scoped>
	.form {
		&-input {
			margin-bottom: 30px;
			position: relative;
		}
		&-error {
			background: var(--danger);
			margin-top: 4px;
			border-radius: 7px;
			font-size: 13px;
			color: #fff;
			padding: 5px;
		}
	}
	.input {
		&-text {
			border: 1px solid var(--primary);
			padding: 0 10px;
			height: 40px;
			border-radius: 7px;
			font-size: 15px;
			width: 100%;
			position: relative;
			z-index: 1;
			&:focus {
				& + .input-label {
					z-index: 1;
					opacity: 1;
					top: -20px;
				}
			}
			&:not(:placeholder-shown) {
				& + .input-label {
					z-index: 1;
					opacity: 1;
					top: -20px;
				}
			}
		}
		&-label {
			font-weight: bold;
			display: block;
			position: absolute;
			top: 20px;
			opacity: 0;
			z-index: -1;
			transition: 0.3s;
			font-size: 13px;
			color: var(--primary);
		}
	}
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}
	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
