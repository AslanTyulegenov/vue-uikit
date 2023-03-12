<script setup lang="ts">
	import Button from '@/components/Button.vue'

	const evenForBotton = () => {
		window.alert('You clicked danger button!!!')
	}
</script>

<template>
	<h1 class="heading-1">Button</h1>
	<h2 class="heading-2">Colors</h2>
	<div class="line">
		<Button lable="Primary" color="primary"></Button>
		<Button lable="Secod" color="second"></Button>
		<Button lable="Success" color="success"></Button>
		<Button lable="Warning" color="warning"></Button>
		<Button lable="Danger" color="danger"></Button>
	</div>
	<h2 class="heading-2">Rounded</h2>
	<div class="line">
		<Button lable="Primary" rounded color="primary"></Button>
		<Button lable="Secod" rounded color="second"></Button>
		<Button lable="Success" rounded color="success"></Button>
		<Button lable="Warning" rounded color="warning"></Button>
		<Button lable="Danger" rounded color="danger"></Button>
	</div>
	<h2 class="heading-2">Disabled</h2>
	<div class="line">
		<Button lable="Primary" disabled rounded color="primary"></Button>
		<Button lable="Secod" disabled rounded color="second"></Button>
		<Button lable="Success" disabled rounded color="success"></Button>
		<Button lable="Warning" disabled rounded color="warning"></Button>
		<Button lable="Danger" disabled rounded color="danger"></Button>
	</div>
	<h2 class="heading-2">Outlined</h2>
	<div class="line">
		<Button lable="Primary" outlined color="primary"></Button>
		<Button lable="Secod" outlined color="second"></Button>
		<Button lable="Success" outlined color="success"></Button>
		<Button lable="Warning" outlined color="warning"></Button>
		<Button lable="Danger" outlined color="danger"></Button>
	</div>
	<h2 class="heading-2">Icon</h2>
	<div class="line">
		<Button outlined icon="heart" color="primary"></Button>
		<Button icon="hand" color="second"></Button>
		<Button outlined icon="address-book" color="success"></Button>
		<Button icon="credit-card" color="warning"></Button>
		<Button outlined icon="lemon" color="danger"></Button>
		<Button icon="hourglass" color="danger"></Button>
	</div>
	<h2 class="heading-2">Size</h2>
	<div class="line">
		<Button lable="Normal" color="primary"></Button>
		<Button lable="Large" size="large" color="primary"></Button>
	</div>
	<h2 class="heading-2">Event</h2>
	<div class="line">
		<Button lable="Normal" color="danger" @click="evenForBotton"></Button>
	</div>
</template>
