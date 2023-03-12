<script setup lang="ts">
	import Input from '@/components/Input.vue'
	import Button from '@/components/Button.vue'
	import useValidate from '@vuelidate/core'
	import {
		numeric,
		minLength,
		maxLength,
		helpers,
		email,
		sameAs
	} from '@vuelidate/validators'
	import { ref, computed } from 'vue'

	const nameField = ref('')
	const emailField = ref('')
	const luckyField = ref('')
	const passwordField = ref('')
	const confirmPasswordField = ref('')
	const frontendField = ref('')

	const mustBeFrontend = (value: string) => value.includes('frontend')

	const rules = computed(() => ({
		nameField: {
			minLength: helpers.withMessage(
				'Минимальная длинна 3 символа',
				minLength(3)
			)
		},
		emailField: {
			email: helpers.withMessage('Вы ввели неверный email', email)
		},
		luckyField: {
			maxLength: helpers.withMessage(
				`Максимальная длина: 3 символа`,
				maxLength(3)
			),
			numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
		},
		confirmPasswordField: {
			sameAsPassword: helpers.withMessage(
				`Пароли не совпадают`,
				sameAs(passwordField.value)
			)
		},
		frontendField: {
			frontendField: helpers.withMessage(
				'Строка должна содержать слово frontend',
				mustBeFrontend
			)
		}
	}))
	const v = useValidate(rules, {
		nameField,
		emailField,
		luckyField,
		confirmPasswordField,
		frontendField
	})

	const submitForm = (event: Event) => {
		console.log(event)
		v.value.$touch()
		if (v.value.$error) return
		alert('Form submitted')
	}
</script>

<template>
	<h1 class="heading-1">Inputs</h1>

	<form @submit.prevent="submitForm">
		<Input
			input-label="Your name"
			name="name"
			placeholder="Input your name"
			v-model:value="v.nameField.$model"
			:error="v.nameField.$errors"
		/>

		<Input
			input-label="Your email"
			name="email"
			placeholder="Input your email"
			v-model:value="v.emailField.$model"
			:error="v.emailField.$errors"
		/>

		<Input
			input-label="Your lucky number"
			name="lucky"
			placeholder="Input your lucky number"
			v-model:value="v.luckyField.$model"
			:error="v.luckyField.$errors"
		/>

		<Input
			input-label="Your password"
			name="password"
			placeholder="Please input password"
			v-model:value="passwordField"
			type="password"
		/>

		<Input
			input-label="Confirm password"
			name="confirm"
			placeholder="Please confirm password"
			v-model:value="v.confirmPasswordField.$model"
			:error="v.confirmPasswordField.$errors"
			type="password"
		/>

		<Input
			input-label="Frontend string"
			name="frontend"
			placeholder="Input string with frontend"
			v-model:value="v.frontendField.$model"
			:error="v.frontendField.$errors"
		/>

		<Button label="Submit" color="primary"></Button>
	</form>
</template>
