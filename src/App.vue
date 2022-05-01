<template>
	<div class="layout">
		<Header/>
		<Footer/>
		<AnimateBg/>
	</div>

</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import AnimateBg from './components/AnimateBg'


export default {
  name: 'App',
  components: { Header, Footer, AnimateBg }
}
</script>

<style lang="sass">
@import '@/assets/sass/main.sass'

.layout
	background: $white
	width: 100%
	max-width: 600px
	border-radius: 25px
	margin: 50px auto
	padding: 45px 25px
	box-shadow: 0 5px 11px rgb(0 0 0 / 10%)
	z-index: 5
	position: relative
	

</style>
