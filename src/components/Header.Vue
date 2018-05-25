<template lang="pug">
      #headermain.headermain
            .logo
                  a(href="#")
                        img.logo__img(src="../assets/logo-music-list.svg")
            .search
                  .search__content
                        input.input__search(
                              type="text" 
                              placeholder="Buscar tu album, canción, artista, año de lanzamiento, etc..."
                              v-model="toSearch"
                              @keyup.enter="search"
                              )
                        a.button__search(@click="search") Buscar
                        a.button__search(@click="clearSearch") Limpiar

                        .search__content__result#searchBlock(:class="{fadeIn : activeSearchBlock}")
                              ul.list__result
                                    li.list__result__item(v-for="search in tracks")
                                          a {{search.name}} - {{search.artists[0].name}}
            .datauser
                  p.datauser__name Jesús Durán
                  img.datauser__img(src="../assets/user.svg")
            
</template>

<script>
import tracksService from '../data/tracks'

export default {
  name: 'headermain',
  data () {
    return {
      toSearch: '',
      tracks: [],
      activeSearchBlock: false
    }
  },
  methods: {
    search () {
      if (this.toSearch === '') {
        this.toSearch = 'No has buscado nada'
        setTimeout(this.clearSearch, 2000)
        return
      }

      tracksService.search(this.toSearch)
        .then(res => {
          this.tracks = res.tracks.items

          this.activeSearchBlock = true
        })
    },
    clearSearch () {
      this.toSearch = ''
      this.tracks = []
      this.activeSearchBlock = false
    }
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';
.headermain{
      display: grid;
      grid-template-columns: 1fr 3fr 2fr;
      align-items: center;
      border-bottom: 1px solid #FF535B;
      position: relative;
      .logo{
            justify-self: center;
            a{
                  .logo__img{
                        width: 100px;
                        margin: 10px;
                  }
            }
      }
      .search{
            &__content{
                  display: grid;
                  grid-template-columns: 5fr 1fr 1fr;
                  .input__search{
                        width: 100%;
                        outline: 0;
                        padding: 2px 10px;
                  }
                  .button__search{
                        text-align: center;
                        align-self: center;
                        border: 1px solid #FF535B;
                        color: #fff;
                        background: linear-gradient(to right,#FF535B , #fd746c);
                        padding: 2px 10px;

                        &:hover{
                              background: linear-gradient(to left,#FF535B , #fd746c);
                              border: 1px solid #FFFF;     
                        }
                  }
                  &__result{
                        background: rgba(0,0,0,0.8);
                        position: absolute;
                        max-height: 300px;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        z-index: 5;
                        overflow: auto;
                        display: none;
                        
                        .list__result{
                              &__item{
                                    display: block;
                                    a{
                                          color: #fff;
                                    }

                              }
                        }
                  }
            }
      }
      .datauser{
            display: grid;
            grid-template-columns: 5fr 1fr;
            align-items: center;
            justify-items: end;
            &__img{
                  width: 50px;
            }
      }
}

</style>
