<template>
	<div class="layout">
		<Header/>
		<Calculator/>
		<Footer/>
	</div>
	<AnimateBg/>

</template>

<script>
import Header from './components/Header'
import Calculator from './components/Calculator'
import Footer from './components/Footer'
import AnimateBg from './components/AnimateBg'


export default {
  name: 'App',
  components: { Header, Calculator, Footer, AnimateBg }
}
</script>

<style lang="sass">
@import '@/assets/sass/main.sass'

.layout
	background: $white
	width: 100%
	max-width: 700px
	border-radius: 25px
	margin: 50px auto
	padding: 45px 80px
	box-sizing: border-box 
	box-shadow: 0 5px 11px rgb(0 0 0 / 10%)
	z-index: 5
	position: relative
	

</style>
