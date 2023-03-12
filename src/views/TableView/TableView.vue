<script setup lang="ts">
	import { ref, computed } from 'vue'
	import BaseTable from '@/components/Table/BaseTable.vue'
	import TableRow from '@/components/Table/TableRow.vue'
	import TableColumn from '@/components/Table/TableColumn.vue'
	import Button from '@/components/Button.vue'

	interface IBook {
		[key: string]: string | number
		id: number
		author: string
		title: string
		image: string
		bg: string
	}

	const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
	const tableSizeColumns = '50px 1fr 2fr 150px 140px'
	const sortField = ref('id')
	const typeSort = ref('asc')
	const books = ref<Array<IBook>>([
		{
			id: 1,
			author: 'Dmitry Glukhovsky',
			title: 'Metro 2033',
			image:
				'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg',
			bg: '#FFA26B'
		},
		{
			id: 2,
			author: 'James Clear',
			title: 'Atomic Habits: An Easy',
			image:
				'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
			bg: '#00C48C'
		},
		{
			id: 3,
			author: 'J. K. Rowling',
			title: 'Harry Potter and the Order of the Phoenix',
			image:
				'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
			bg: '#00C48C'
		}
	])

	const booksSorting = computed(() => {
		const array = books.value

		array.sort((a, b) => {
			let modifier = 1
			const currentSortField = sortField.value
			const af = a[currentSortField]
			const bf = b[currentSortField]
			if (typeSort.value === 'desc') modifier = -1
			if (af < bf) return -1 * modifier
			if (af > bf) return 1 * modifier
			return 0
		})

		return array
	})

	const setSort = (name: string) => {
		if (sortField.value === name) {
			if (typeSort.value === 'asc') {
				typeSort.value = 'desc'
			} else {
				typeSort.value = 'asc'
			}
		} else {
			sortField.value = name
		}
	}
</script>

<template>
	<h1 class="heading1">Table</h1>
	<span> Sort field {{ sortField }}</span>
	<span> Sort type {{ typeSort }}</span>
	<BaseTable
		:heads="tableHeads"
		:column-templates="tableSizeColumns"
		@sorting="setSort"
	>
		<TableRow
			v-for="book in booksSorting"
			:key="book.id"
			:bg-row="book.bg"
			:column-templates="tableSizeColumns"
		>
			<TableColumn :column-title="tableHeads[0]">{{ book.id }}</TableColumn>
			<TableColumn :column-title="tableHeads[1]">{{ book.author }}</TableColumn>
			<TableColumn :column-title="tableHeads[2]">{{ book.title }}</TableColumn>
			<TableColumn
				:column-title="tableHeads[3]"
				image
				:src-image="book.image"
			/>
			<TableColumn :column-title="tableHeads[4]"
				><Button lable="Read Online"
			/></TableColumn>
		</TableRow>
	</BaseTable>
</template>
