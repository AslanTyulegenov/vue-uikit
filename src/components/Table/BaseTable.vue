<script setup lang="ts">
	const props = defineProps({
		heads: {
			type: Array<String>,
			required: false,
			default: ['']
		},
		columnTemplates: {
			type: String,
			required: false,
			default: ''
		}
	})

	const emit = defineEmits(['sorting'])
	const clickOnHead = (name: String) => {
		emit('sorting', name.toLowerCase())
	}
</script>

<template>
	<div class="table-wrapper">
		<div class="table">
			<div
				class="table-head"
				:style="{ 'grid-template-columns': columnTemplates }"
			>
				<div
					v-for="head in heads"
					:key="head.toString()"
					class="table-head__name"
					@click="clickOnHead(head)"
				>
					{{ head }}
				</div>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.table {
		background-color: #fff;
		width: 100%;
		margin-bottom: 40px;
		margin-top: 15px;
		&-wrapper {
			display: flex;
			justify-content: center;
		}
		&-head {
			padding: 5px 16px;
			display: grid;
			column-gap: 10px;
			align-items: center;
			border-bottom: 2px solid #eeeff4;
			background: #fff;
			&__name {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				color: #999;
				cursor: pointer;
			}
			@media screen and (max-width: 767px) {
				display: none;
			}
		}
	}
</style>
