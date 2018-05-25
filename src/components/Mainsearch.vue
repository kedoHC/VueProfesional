<template lang="pug">
	#mainsearch
		Header
		.mainsearch
			//- img(src="../assets/9864.jpg")
			Options
			.mainsearch__list
				h2.list__subtitle Polulares
				.block__previews
					.preview(v-for='item in mainlist')
						a.preview__link(:href='item.url')
							img(:src="item.img")
							.preview__text
								.preview__text__title 
									p {{item.albumName}}
								.preview__text__description 
									p {{item.albumDescription}}
				h2.list__subtitle Ahora en el cine
				.block__previews
					.preview(v-for='item in mainlist')
						a.preview__link(:href='item.url')
							img(:src="item.img")
							.preview__text
								.preview__text__title 
									p {{item.albumName}}
								.preview__text__description 
									p {{item.albumDescription}}

				h2.list__subtitle Ahora en el cine
				.block__previews
					.preview(v-for='item in mainlist')
						a.preview__link(:href='item.url')
							img(:src="item.img")
							.preview__text
								.preview__text__title 
									p {{item.albumName}}
								.preview__text__description 
									p {{item.albumDescription}}
</template>

<script>

import Options from './Options.vue'
import Header from './Header.vue'
import Mainlist from '../data/mainlist.js'

export default {
  name: 'Mainsearch',
  data () {
    return {
      mainlist: []
    }
  },
  components: {
    Options: Options,
    Header: Header
  },
  mounted: function () {
    this.mainlist = Mainlist.list
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

.mainsearch{
	display: grid;
	grid-template-columns: 1fr 5fr;
}
.mainsearch__list{
	max-width: 1200px;
	margin: 20px auto;
	    
	.list__subtitle{
		margin-bottom: 0;
	}
}
.block__previews{
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-gap: 20px;

	.preview{
		position: relative;

		a{

			p{
				margin: 0;
			}
			.preview__text{
				position: relative;
				background-color: rgba(255,83,91,0.8);
				color: #fff;
				position: absolute;
				bottom: 0;
				height: 50%;
				display: grid;
				align-content: center;
				padding: 1%;
				width: 100%;
				text-align: center;

				&__title{
					font-weight: bolder;
				}
				&__description{
					font-size: 15px;                        
				}
			}
		}
	}
}


</style>
