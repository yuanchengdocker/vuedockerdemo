<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <ClipLoader :size="'50px'"/>
    <DatePicker />
    <CarouselWide :slidesToShow="3">
      <template v-slot:slides>
        <img class="fluid" src="http://placehold.it/2000x1000" alt />
        <img class="fluid" src="http://placehold.it/2000x1000" alt />
        <img class="fluid" src="http://placehold.it/2000x1000" alt />
        <img class="fluid" src="http://placehold.it/2000x1000" alt />
        <img class="fluid" src="http://placehold.it/2000x1000" alt />
      </template>
    </CarouselWide>
  </div>
</template>

<script>
import axios from 'axios';
import ClipLoader from '@bit/greyby.vue-spinner.clip-loader';
import DatePicker from '@bit/myliang.fish-ui.styles.date-picker';
import CarouselWide from '@bit/hbs.vue.carousel-wide';

export default {
  name: 'App',
  components: {ClipLoader, DatePicker, CarouselWide},
  mounted() {
    axios.get('/api/json', {
      params: {}
    }).then(
      res => {
        console.log(res);
      }
    ).catch(
      error => {
          console.log(error);
      }
    )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
