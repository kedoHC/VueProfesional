<template lang="pug">
	#options.options
		ul.options__top
			li
				a(href="#")
					img(src="../assets/home.svg")
					span Home
			li
				a(href="#")
					img(src="../assets/star.svg")
					span Trending
			li
				a(href="#")
					img(src="../assets/love.svg")
					span Mas likes
		ul.options__bottom
			li
				a(href="#")
					img(src="../assets/settings.svg")
					span Settings


</template>

<script>
export default {
  name: 'options'
}
</script>

<style lang="scss">

@import '../scss/main.scss';

.options{
	background: linear-gradient(to right,#FF535B , #fd746c);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	align-items: center;
	text-align: center;

	img{
		width: 30%;
		min-width: 40px;
	}
	ul{
		li{
			a{
				span{
					display: block;
				}
			}
		}
	}
	&__top{
		align-self: start;
		li{
			margin: 20px;
		}
	}
	&__bottom{
		align-self: end;
		
	}
}

</style>
