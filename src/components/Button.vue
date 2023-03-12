<script setup lang="ts">
	const { lable } = defineProps({
		lable: {
			type: String,
			default: 'Button'
		},
		color: {
			type: String,
			default: 'primary',
			validator: (value: string) =>
				['primary', 'second', 'success', 'warning', 'danger'].includes(value)
		},
		rounded: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		outlined: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			required: false
		},
		size: {
			type: String,
			default: 'normal'
		}
	})
	const emit = defineEmits(['click'])

	const clickOnButton = () => {
		emit('click')
	}
</script>

<template>
	<button
		:class="[
			'btn',
			`btn_${color}`,
			{
				btn_rounded: rounded,
				btn_outlined: outlined,
				btn_icon: icon,
				btn_large: size === 'large'
			}
		]"
		:disabled="disabled"
		@click="clickOnButton"
	>
		<span v-if="icon">
			<font-awesome-icon :icon="`fa-regular fa-${icon}`" />
		</span>
		<span v-else>{{ lable }}</span>
	</button>
</template>

<style lang="scss" scoped>
	.btn {
		margin-right: 10px;
		margin-bottom: 10px;
		padding: 0 10px;
		height: 40px;
		color: #fff;
		border-radius: 7px;
		border: none;
		cursor: pointer;
		font-size: 15px;
		transition: 0.2s;

		&_primary {
			background-color: var(--primary);
			border: 1px solid var(--primary);
			&:enabled:hover {
				background-color: var(--primary-hover);
			}
		}
		&_second {
			background-color: var(--second);
			border: 1px solid var(--second);
			&:enabled:hover {
				background-color: var(--second-hover);
			}
		}
		&_success {
			background-color: var(--success);
			border: 1px solid var(--success);
			&:enabled:hover {
				background-color: var(--success-hover);
			}
		}
		&_warning {
			background-color: var(--warning);
			border: 1px solid var(--warning);
			&:enabled:hover {
				background-color: var(--warning-hover);
			}
		}
		&_danger {
			background-color: var(--danger);
			border: 1px solid var(--danger);
			&:enabled:hover {
				background-color: var(--danger-hover);
			}
		}
		&_rounded {
			border-radius: 15px;
		}
		&_outlined {
			background: transparent;
			color: #000;
			&:hover {
				color: #fff;
			}
		}
		&_icon {
			padding: 0;
			height: 40px;
			width: 40px;
			border-radius: 50%;
		}
		&_large {
			height: 48px;
			padding: 0 30px;
		}
		&:disabled {
			opacity: 0.6;
			cursor: default;
			&:hover {
				opacity: 0.6;
			}
		}
	}
</style>
