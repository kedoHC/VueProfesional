<template lang="pug">
      #login
        img.logo__desktop(src='../assets/radio.svg')
        h1.title__login {{msg}}
        form.form__login(action="#" method="post" autocomplete="off")
              label.form__login__label(for="nameInput") Nombre
              input.form__login__input(type="text" id="nameInput" name="nameInput")
              label.form__login__label(for="lastNameInput") Apellido 
              input.form__login__input(type="text" id="lastNameInput" name="lastNameInput")
              label.form__login__label(for="jobInput") Cargo
              input.form__login__input(type="text" id="jobInput" name="jobInput")
              button.form__login__submit(type="submit") Enviar
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Registro a la estación'
    }
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';
#login{
  color: #00bfd6;
  margin-top: 60px;
  
  .form__login{

    border: 1px solid #a3eff3;
    width: 40%;
    margin: 0 auto;
    padding: 2%;
    
        &__label{
          display: block;
          color: #ff9300;
        }
        &__input{
          display: block; 
          margin: 20px auto;
          border: none;
          border-bottom: 2px solid #ff9300;
          width: 50%;
          outline: 0;
          text-align: center;
          padding: 3px;
        }
        &__submit{
          padding: 10px;
          color: #fff;
          text-transform: uppercase;
          font-weight: bolder;
          outline: 0;
          background: #008fd6;
          font-size: 18px;
          cursor: pointer;
        }
  }
}

</style>
